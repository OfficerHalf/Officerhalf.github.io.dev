import { PokemonForm } from '../src/util/pokemon';

export interface Rel {
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
  results: Rel[];
}

export interface PokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface PokemonSpeciesVariety {
  is_default: boolean;
  pokemon: Rel;
}

export interface PokemonSpecies {
  id: number;
  name: string;
  color: Rel;
  varieties: PokemonSpeciesVariety[];
  evolution_chain: {
    url: string;
  };
}

export interface PokemonEvolution {
  evolves_to: PokemonEvolution[];
  species: Rel;
}

export interface PokemonEvolutionChain {
  id: number;
  chain: PokemonEvolution;
}

export interface ApiPokemon {
  id: number;
  is_default: boolean;
  name: string;
  species: Rel;
  sprites: {
    front_default: string | null;
    front_shiny: string | null;
  };
  types: PokemonType[];
}

export interface Pokemon {
  id: number;
  runId: string; // so we can tell apart duplicate pokemon
  name: string;
  nickname?: string;
  types: PokemonType[];
  variety: PokemonForm;
  shiny: boolean;
  sprites: {
    front_default: string | null;
    front_shiny: string | null;
  };
  species: Rel;
}

export interface RandomizerSettings {
  lastSelectedRun: string;
}

export interface RandomizerRunFile {
  id: string;
  name: string;
  pokemon: Pokemon[];
  team: Pokemon[];
}

export interface RandomizerRunCollection {
  gistId: string;
  runs: RandomizerRunFile[];
}
