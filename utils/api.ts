export async function fetchPokemonList() {
  try {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');

    if (!res.ok) {
      throw new Error(`Failed to fetch Pokémon list: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();

    if (!data.results || !Array.isArray(data.results)) {
      throw new Error("Invalid response format: 'results' field is missing or not an array");
    }

    return data;
  } catch (error) {
    console.error("Error in fetchPokemonList:", error);
    throw new Error("Unable to fetch Pokémon list");
  }
}

export async function fetchPokemonDetails(name: string) {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

    if (!res.ok) {
      throw new Error(`Failed to fetch Pokémon details: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();

    if (!data.name || !data.sprites) {
      throw new Error("Invalid response format: Missing required Pokémon details");
    }

    return data;
  } catch (error) {
    console.error(`Error in fetchPokemonDetails (${name}):`, error);
    throw new Error(`Unable to fetch details for ${name}`);
  }
}
