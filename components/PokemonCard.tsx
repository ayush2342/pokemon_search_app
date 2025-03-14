import Link from "next/link";

export default function PokemonCard({ pokemon }: { pokemon: { name: string; image: string } }) {
  return (
    <div className="border p-4 rounded-lg shadow-md text-center">
      <img src={pokemon.image} alt={pokemon.name} className="w-24 h-24 mx-auto" />
      <h2 className="text-xl font-bold capitalize mt-2">{pokemon.name}</h2>
      <Link href={`/${pokemon.name}`} className="text-blue-500 hover:underline mt-2 block">
        Details →
      </Link>
    </div>
  );
}
