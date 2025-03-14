import Link from "next/link";
import PokemonDetails from "../../components/PokemonDetails";

export default function Pokemon({ params }: { params: { pokemonName: string } }) {
  return (
    <div className="h-screen bg-[#F6F6F6] flex flex-col">
      <div className="p-4">
        <Link href="/" className="text-blue-500 hover:underline">&larr; Back</Link>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <PokemonDetails name={params.pokemonName} />
      </div>
    </div>
  );
}
