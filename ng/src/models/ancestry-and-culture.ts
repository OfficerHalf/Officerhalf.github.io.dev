export interface AncestryAndCulture {
  ancestry: Ancestry;
  culture: Culture[];
}

export interface Ref {
  id: string;
  name: string;
}

export enum Size {
  Tiny,
  Small,
  Medium,
  Large,
  Huge,
  Gargantuan
}

enum AbilityScore {
  Strength = 'Strength',
  Dexterity = 'Dexterity',
  Constitution = 'Constitution',
  Intelligence = 'Intelligence',
  Wisdom = 'Wisdom',
  Charisma = 'Charisma'
}

enum Die {
  D4 = 4,
  D6 = 6,
  D8 = 8,
  D10 = 10,
  D12 = 12,
  D20 = 20
}

export enum RaceGroup {
  Aarakocra = ' Aarakocra',
  Aasimar = 'Aasimar',
  Bugbear = 'Bugbear',
  Dragonborn = 'Dragonborn',
  Dwarf = 'Dwarf',
  Elf = 'Elf',
  Firbolg = 'Firbolg',
  Genasi = 'Genasi',
  Gith = 'Gith',
  Gnome = 'Gnome',
  Goblin = 'Goblin',
  Goliath = 'Goliath',
  HalfElf = 'Half-Elf',
  Hafling = 'Halfling',
  HalfOrc = 'Half-Orc',
  Hobgoblin = 'Hobgoblin',
  Human = 'Human',
  Kenku = 'Kenku',
  Kobold = 'Kobold',
  Lizardfolk = 'Lizardfolk',
  Orc = 'Orc',
  Shifter = 'Shifter',
  Tabaxi = 'Tabaxi',
  Tiefling = 'Tiefling',
  Tortle = 'Tortle',
  Warforged = 'Warforged',
  YuanTiPureblood = 'Yuan-ti Pureblood'
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

export enum SpeedType {
  Walking = 'Walking',
  Flying = 'Flying',
  Climbing = 'Climbing',
  Swimming = 'Swimming',
  Burrowing = 'Burrowing'
}

export interface Speed {
  mode: SpeedType;
  value: number;
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
    modalities: Speed[];
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

interface DnDBeyondRace {
  name: string;
  size: Size;
  speed: Speed[];
  shortDescription?: string;
  raceGroup?: RaceGroup;
  description: string;
  racialTraitIntroduction: string;
}

enum AbilityDuration {
  Round = 'Round',
  Minute = 'Minute',
  Hour = 'Hour',
  Day = 'Day'
}

enum DnDBeyondRacialTraitModifierType {
  Bonus = 'Bonus',
  Damage = 'Damage',
  Advantage = 'Advantage',
  Disadvantage = 'Disadvantage',
  Resistance = 'Resistane',
  Immunity = 'Immunity',
  Vulnerability = 'Vulnerability',
  Sense = 'Sense',
  Set = 'Set',
  Proficiency = 'Proficiency',
  Language = 'Language',
  Expertise = 'Expertise',
  HalfProficiency = 'Half Proficiency',
  Feat = 'Feat',
  CarryingCapacity = 'Carrying Capacity',
  NaturalWeapon = 'Natural Weapon',
  StealthDisadvantage = 'Stealth Disadvantage',
  SpeedReduction = 'Speed Reduction',
  MeleeWeaponAttack = 'Melee Weapon Attack',
  RangedWeaponAttack = 'Ranged Weapon Attack',
  WeaponProperty = 'Weapon Property',
  HalfProficiencyRoundUp = 'Half Proficiency Round Up',
  FavoredEnemy = 'Favored Enemy',
  Ignore = 'Ignore',
  EldritchBlast = 'Eldritch Blast',
  ReplaceDamageType = 'Replace Damage Type',
  TwiceProficiency = 'Twice Proficiency',
  Protection = 'Protection',
  StackingBonus = 'Stacking Bonus',
  SetBase = 'Set Base',
  IgnoreWeaponProperty = 'Ignore Weapon Property'
}

interface DnDBeyondRacialTraitOption {}
interface DnDBeyondRacialTraitModifier {
  type: DnDBeyondRacialTraitModifierType;
  subtype: string;
  abilityScore?: AbilityScore;
  diceCount?: number;
  dieType: Die;
  fixedValue?: string;
  additionalBonusTypes?: string[];
  details?: string;
  durationInterval?: string;
  durationMetric?: AbilityDuration;
}
interface DnDBeyondRacialTraitSpell {}
interface DnDBeyondRacialTraitAction {}
interface DnDBeyondRacialTraitCreature {}
interface DnDBeyondRacialTraitAdditionalSpellList {}

interface DnDBeyondRacialTrait {
  name: string;
  snippet: string;
  description: string;
  options: DnDBeyondRacialTraitOption[];
  modifiers: DnDBeyondRacialTraitModifier[];
  spells: DnDBeyondRacialTraitSpell[];
  actions: DnDBeyondRacialTraitAction[];
  creatures: DnDBeyondRacialTraitCreature[];
  additionalSpellList?: DnDBeyondRacialTraitAdditionalSpellList;
}
