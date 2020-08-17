export interface ListPokemon {
  name: string;
  url: string;
}

export interface IdPokemon {
  name: string;
  id: number;
}

export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: ListPokemon[];
}

export interface PokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface Pokemon {
  id: number;
  is_default: boolean;
  name: string;
  sprites: {
    front_default: string | null;
    front_shiny: string | null;
  };
  types: PokemonType[];
}

export interface RandomizerSettings {
  lastSelectedRun: string;
}

export interface RandomizerRunFile {
  name: string;
  pokemon: Pokemon[];
  team: Pokemon[];
}
