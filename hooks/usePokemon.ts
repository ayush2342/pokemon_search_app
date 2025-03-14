import { useState, useEffect } from "react";
import { PokemonListItem, PokemonDetailsValue, PokemonType } from "../types/pokemon";

export default function usePokemon() {
  const [pokemons, setPokemons] = useState<PokemonListItem[]>([]);
  const [types, setTypes] = useState<PokemonType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function fetchPokemons() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=200");
      if (!res.ok) throw new Error("Failed to fetch Pokémon list");

      const data = await res.json();
      
      const pokemonDetailsPromises = data.results.map(async (pokemon: any) => {
        const detailsRes = await fetch(pokemon.url);
        if (!detailsRes.ok) throw new Error(`Failed to fetch details for ${pokemon.name}`);
        
        const details = await detailsRes.json();
        return {
          name: pokemon.name,
          url: pokemon.url,
          image: details.sprites.front_default,
          types: details.types.map((t: any) => t.type.name),
        };
      });

      const pokemonList = await Promise.all(pokemonDetailsPromises);
      setPokemons(pokemonList);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  async function fetchPokemonDetails(name: string): Promise<PokemonDetailsValue | null> {
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      if (!res.ok) throw new Error(`Failed to fetch details for ${name}`);

      const data = await res.json();

      return {
        id: data.id,
        name: data.name,
        image: data.sprites.other["official-artwork"].front_default,
        types: data.types.map((t: any) => t.type.name),
        stats: data.stats.map((s: any) => ({ name: s.stat.name, base_stat: s.base_stat })),
        abilities: data.abilities.map((a: any) => a.ability.name),
        moves: data.moves.slice(0, 5).map((m: any) => m.move.name), 
      };
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async function fetchTypes() {
    try {
      const res = await fetch("https://pokeapi.co/api/v2/type");
      if (!res.ok) throw new Error("Failed to fetch types");

      const data = await res.json();
      setTypes(data.results.map((t: any) => ({ name: t.name })));
    } catch (error: any) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    fetchPokemons();
    fetchTypes();
  }, []);

  return { pokemons, types, fetchPokemons, fetchTypes, fetchPokemonDetails, loading, error };
}
