export interface AncestryAndCulture {
  ancestry: Ancestry;
  culture: Culture[];
}

export interface Ref {
  id: string;
  name: string;
}

export enum Size {
  Small,
  Medium,
  Large
}

export interface AbilityScoreIncrease {
  strength?: number;
  dexterity?: number;
  constitution?: number;
  intelligence?: number;
  wisdom?: number;
  charisma?: number;
}

export interface Ability {
  id: string;
  name: string;
  description: string;
  type: AbilityType;
}

export enum AbilityType {
  Proficiency = 'Proficiency',
  Language = 'Language',
  Resistance = 'Resistance',
  Skill = 'Skill',
  Speed = 'Speed',
  Other = 'Other'
}

export enum Speed {
  Walking = 'Walking',
  Flying = 'Flying',
  Climbing = 'Climbing',
  Swimming = 'Swimming',
  Burrowing = 'Burrowing'
}

export interface Ancestry {
  id: string;
  name: string;
  description: string;
  age: {
    text: string;
    adult: number;
    old: number;
  };
  size: {
    text: string;
    weight?: number;
    height?: {
      min?: number;
      max?: number;
    };
    size: Size;
  };
  speed: {
    text: string;
    modalities: {
      mode: Speed;
      value: number;
    }[];
  };
  abilities: Ability[];
  cultures: string[];
}

export interface Culture {
  id: string;
  name: string;
  description: string;
  asi: AbilityScoreIncrease;
  alignment: string;
  abilities: Ability[];
  ancestries: string[];
}
