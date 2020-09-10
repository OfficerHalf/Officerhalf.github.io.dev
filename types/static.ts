import { BlogPost, KeyValuePair } from './cms';
import { Loot } from './dnd';
import { Pokemon, PokemonSpecies } from './pokemon';

export interface BlogRouteData {
  posts: BlogPost[];
}

export interface CategoryRouteData {
  posts: BlogPost[];
  category: KeyValuePair;
}

export interface TagRouteData {
  posts: BlogPost[];
  tag: KeyValuePair;
}

export interface PostRouteData {
  post: BlogPost;
  next?: KeyValuePair;
  previous?: KeyValuePair;
}

export interface RandomLootRouteData {
  lootTags: string[];
  lootTypes: string[];
  loot: Loot[];
}

export interface SiteData {
  pokemon: { [id: string]: Pokemon };
  species: { [id: string]: PokemonSpecies };
  pokemonFirebaseConfig: {
    apiKey: string;
    authDomain: string;
    databaseURL: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
  };
}
