// Useful Types
export interface Rel {
  name: string;
  url: string;
}

// Api Response Types
export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Rel[];
}

export interface PokemonResponse {
  // Primary Attributes
  id: number;
  is_default: boolean;
  name: string;
  species: Rel;
  sprites: {
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
  };
  types: PokemonType[];
  order: number | null;

  // Extra stuff
  stats: any[];
  location_area_encounters: string;
  moves: any[];
  abilities: any[];
  base_experience: number;
  forms: Rel[];
  game_indices: any[];
  height: number;
  weight: number;
  held_items: any[];
}

export interface PokemonType {
  slot: number;
  type: Rel;
}

export interface PokemonSpeciesVariety {
  is_default: boolean;
  pokemon: Rel;
}

export interface PokemonSpeciesResponse {
  // Primary attributes
  id: number;
  name: string;
  evolution_chain: {
    url: string;
  };
  evolves_from_species: Rel | null;
  forms_switchable: boolean;
  has_gender_differences: boolean;
  order: number;
  varieties: PokemonSpeciesVariety[];

  // Extra stuff
  base_happiness: number;
  capture_rate: number;
  color: Rel;
  egg_groups: Rel[];
  flavor_text_entries: any[];
  form_descriptions: any[];
  gender_rate: number;
  genera: any[];
  generation: Rel;
  growth_rate: Rel;
  habitat: Rel;
  hatch_counter: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  names: any[];
  pal_park_encounters: any[];
  pokedex_numbers: any[];
  shape: Rel;
}

export interface PokemonEvolutionResponse {
  // Primary attributes
  species: Rel;
  evolves_to: PokemonEvolutionResponse[];

  // Extra stuff
  evolution_details: any[];
  is_baby: boolean;
}

export interface EvolutionChainResponse {
  // Primary attributes
  id: number;
  chain: PokemonEvolutionResponse;

  // Extra stuff
  baby_trigger_item: null | any;
}

// Modified types, for usability and storage
export type Pokemon = Pick<PokemonResponse, 'id' | 'name' | 'types' | 'sprites' | 'types' | 'species'> & {
  runId: string;
  nickname?: string;
  shiny: boolean;
  benched: boolean;
};
export type PokemonSpecies = Pick<PokemonSpeciesResponse, 'id' | 'name' | 'varieties' | 'evolution_chain'>;
export type PokemonEvolution = Pick<PokemonEvolutionResponse, 'species' | 'evolves_to'>;

// Storage types
export interface PokemonData {
  pokemon: { [id: string]: Pokemon };
  species: { [id: string]: PokemonSpecies };
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
