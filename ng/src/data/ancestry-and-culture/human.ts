import { AbilityType, Ancestry, AncestryAndCulture, Culture, Size, SpeedType } from 'src/models/ancestry-and-culture';

const ancestry: Ancestry = {
  id: 'ancestry:human',
  name: 'Human',
  description:
    'Historians report that humans developed fairly recently, compared to many other ancestries. Despite their relative novelty, those of human ancestry have spread across the land and established human communities virtually everywhere.',
  age: {
    text: 'Humans reach adulthood in their late teens and live less than a century.',
    adult: 18,
    old: 100
  },
  size: {
    size: Size.Medium,
    text:
      'Humans vary widely in height and build, from barely 5 feet to well over 6 feet tall. Regardless of your position in that range, your size is Medium.',
    height: {
      min: 5,
      max: 6
    }
  },
  speed: { text: 'Your base walking speed is 30 feet.', modalities: [{ mode: SpeedType.Walking, value: 30 }] },
  abilities: [
    {
      id: 'ancestry:human:ability:curiosity',
      name: 'Curiosity',
      description:
        'Your natural curiosity leads you to dabble in a variety of activities. You gain proficiency in a skill of your choice, as well as with an artisan tool of your choice.',
      type: AbilityType.Proficiency
    }
  ],
  cultures: ['culture:human']
};

const culture: Culture = {
  id: 'culture:human',
  name: 'Human',
  description:
    'Human culture is defined by its curiosity and love of novelty. As such, its members vary widely, adopting new practices more frequently than those of other cultures often do.',
  asi: {
    strength: 1,
    dexterity: 1,
    constitution: 1,
    intelligence: 1,
    wisdom: 1,
    charisma: 1
  },
  alignment:
    'Those raised in human cultures tend toward no particular alignment, just as human cultures themselves tend to change and vary as well. The best and the worst are found among them.',
  abilities: [
    {
      id: 'culture:human:ability:languages',
      name: 'Languages',
      description:
        'You can speak, read, and write Common and one extra language of your choice. Human communities typically learn the languages that its members brought from their own heritages. Because so many elves and dwarves live among humans, for example, members of human society are fond of sprinkling their speech with words borrowed from other tongues: Orcish curses, Elvish musical expressions, Dwarvish military phrases, and so on.',
      type: AbilityType.Language
    }
  ],
  ancestries: ['ancestry:human']
};

export const Human: AncestryAndCulture = { ancestry, culture: [culture] };
