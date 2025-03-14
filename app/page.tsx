import PokemonList from '../components/PokemonList';

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Pokémon Search App</h1>
      <PokemonList />
    </div>
  );
}