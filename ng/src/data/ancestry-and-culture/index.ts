import { Ability, Ancestry, AncestryAndCulture, Culture, Ref } from 'src/models/ancestry-and-culture';
import { BlinkDog } from './blink-dog';
import { Dragonborn } from './dragonborn';

const all: AncestryAndCulture[] = [BlinkDog, Dragonborn];
const reducedAncestries: Ref[] = all.map(each => {
  return { id: each.ancestry.id, name: each.ancestry.name };
});
const reducedCultures: Ref[] = all.map(each => {
  return { id: each.culture.id, name: each.culture.name };
});
const ancestries: { [id: string]: Ancestry } = {};
const cultures: { [id: string]: Culture } = {};
const abilities: { [id: string]: Ability } = {};

// Populate
all.forEach(each => {
  ancestries[each.ancestry.id] = each.ancestry;
  cultures[each.culture.id] = each.culture;
  each.ancestry.abilities.forEach(ability => {
    abilities[ability.id] = ability;
  });
  each.culture.abilities.forEach(ability => {
    abilities[ability.id] = ability;
  });
});

export default { all, ancestries, cultures, abilities, reducedAncestries, reducedCultures };
