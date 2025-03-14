"use client";

import { useEffect, useState } from "react";
import usePokemon from "../hooks/usePokemon";
import { PokemonDetailsValue } from "@/types/pokemon";
import Link from "next/link";

export default function PokemonDetails({ name }: { name: string }) {
  const { fetchPokemonDetails, loading, error } = usePokemon();
  const [pokemon, setPokemon] = useState<PokemonDetailsValue>();

  useEffect(() => {
    async function getPokemonData() {
      const data = await fetchPokemonDetails(name);
      if (data) setPokemon(data);
    }
    getPokemonData();
  }, [name]);

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen bg-[#F6F6F6]">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      </div>
    );

  if (error)
    return <p className="text-red-500 text-center mt-10">Error: {error}</p>;

  if (!pokemon)
    return <p className="text-center mt-10">No Pokémon data available.</p>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#F6F6F6] p-4 relative">
      <nav className="text-gray-600 mb-4">
        <Link href="/" className="text-blue-500 hover:underline">Home</Link>
        <span className="mx-2">→</span>
        <span className="font-semibold capitalize">{pokemon.name}</span>
      </nav>

      <div className="bg-teal-100 p-8 rounded-lg shadow-lg w-[550px] h-[550px] flex flex-col items-center">
        <img
          src={pokemon.image}
          alt={pokemon.name}
          className="w-48 h-48 mx-auto mb-4"
        />
        <div className="bg-amber-300 p-6 mt-4 rounded-lg w-full text-left">
          <p><strong>Name:</strong> {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</p>
          <p><strong>Type:</strong> {pokemon.types.join(", ")}</p>
          <p><strong>Stats:</strong> {pokemon.stats.map(stat => stat.name).join(", ")}</p>
          <p><strong>Abilities:</strong> {pokemon.abilities.join(", ")}</p>
          <p><strong>Some Moves:</strong> {pokemon.moves.join(", ")}</p>
        </div>
      </div>
    </div>
  );
}
