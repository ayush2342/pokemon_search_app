export interface PokemonListItem {
    name: string;
    url: string;
    image: string;
    types: string[];
  }
  
  export interface PokemonDetailsValue {
    id: number;
    name: string;
    image: string;
    types: string[];
    stats: { name: string; base_stat: number }[];
    abilities: string[];
    moves: string[];
  }
  
  export interface PokemonType {
    name: string;
  }
  