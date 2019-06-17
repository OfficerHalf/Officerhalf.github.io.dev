export enum SpellSchool {
  Abjuration = 'Abjuration',
  Conjuration = 'Conjuration',
  Divination = 'Divination',
  Enchantment = 'Enchantment',
  Evocation = 'Evocation',
  Illusion = 'Illusion',
  Necromancy = 'Necromancy',
  Transmutation = 'Transmutation'
}

export interface SpellComponent {
  type: string;
  short: string;
}

export interface SpellClass {
  name: string;
}

export interface Spell {
  components: SpellComponent[];
  level: number;
  description: string;
  duration: string;
  range: string;
  concentration: boolean;
  name: string;
  cast_time: string;
  ritual: boolean;
  errata: string;
  school: SpellSchool;
  spell_lists: SpellClass[];
  materials: string;
}
