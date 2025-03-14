'use client';

import { useState, useEffect } from 'react';
import PokemonCard from './PokemonCard';
import SearchForm from './SearchForm';
import usePokemon from '../hooks/usePokemon';

export default function PokemonList() {
  const { pokemons, loading, error } = usePokemon();
  const [filteredPokemons, setFilteredPokemons] = useState(pokemons);

  useEffect(() => {
    setFilteredPokemons(pokemons);
  }, [pokemons]);

  const handleSearch = (searchTerm: string, selectedType: string) => {
    let filtered = pokemons;

    if (searchTerm) {
      filtered = filtered.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedType) {
      filtered = filtered.filter((pokemon) =>
        pokemon.types?.includes(selectedType)
      );
    }

    setFilteredPokemons(filtered);
  };

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen bg-[#F6F6F6]">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      </div>
    );
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <SearchForm onSearch={handleSearch} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredPokemons.length > 0 ? (
          filteredPokemons.map((pokemon) => (
            <PokemonCard key={pokemon.name} pokemon={pokemon} />
          ))
        ) : (
          <p>No Pokémon found.</p>
        )}
      </div>
    </div>
  );
}
