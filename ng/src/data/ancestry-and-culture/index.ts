// Imports
import { Ability, Ancestry, AncestryAndCulture, Culture, Ref } from 'src/models/ancestry-and-culture';
import { BlinkDog } from './blink-dog';
import { Dragonborn } from './dragonborn';
import { Elf } from './elf';
import { Dwarf } from './dwarf';
import { Gnome } from './gnome';
import { Halfling } from './halfling';
import { Human } from './human';

// Register
const all: AncestryAndCulture[] = [BlinkDog, Dragonborn, Dwarf, Elf, Gnome, Halfling, Human];

// Map
const reducedAncestries: Ref[] = all.map(each => {
  return { id: each.ancestry.id, name: each.ancestry.name };
});
const reducedCultures: Ref[] = [];
const ancestries: { [id: string]: Ancestry } = {};
const cultures: { [id: string]: Culture } = {};
const abilities: { [id: string]: Ability } = {};

// Populate
all.forEach(each => {
  // Cultures
  each.culture.forEach(c => {
    cultures[c.id] = c;
    reducedCultures.push({ id: c.id, name: c.name });
    c.abilities.forEach(a => {
      abilities[a.id] = a;
    });
  });

  // Ancestries
  ancestries[each.ancestry.id] = each.ancestry;
  each.ancestry.abilities.forEach(ability => {
    abilities[ability.id] = ability;
  });
});

export default { all, ancestries, cultures, abilities, reducedAncestries, reducedCultures };
