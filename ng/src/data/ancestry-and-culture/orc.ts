import { AbilityType, Ancestry, AncestryAndCulture, Culture, Size, Speed } from 'src/models/ancestry-and-culture';

const ancestry: Ancestry = {
  id: 'ancestry:orc',
  name: 'Orc',
  description:
    'Those of orcish ancestry tell tales tracing their origins to their primary god, though the details are not included in orcish myth. Indeed, some scholars of orcish ancestry or culture even claim that the orcish ancestors came from a faraway world.',
  age: {
    text: 'Orcs mature a little faster than humans, reaching adulthood around age 14. They live to be about 75.',
    adult: 14,
    old: 75
  },
  size: {
    text:
      'Orcs are somewhat larger and bulkier than humans, and they range from 5 to well over 6 feet tall. Your size is Medium.',
    size: Size.Medium,
    height: { min: 5, max: 6 }
  },
  speed: { text: 'Your base walking speed is 30 feet.', modalities: [{ mode: Speed.Walking, value: 30 }] },
  abilities: [
    {
      id: 'ancestry:orc:ability:darkvision',
      name: 'Darkvision',
      description:
        'Thanks to your orcish ancestry, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.',
      type: AbilityType.Other
    },
    {
      id: 'ancestry:orc:ability:relentlessEndurance',
      name: 'Relentless Endurance',
      description:
        'When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. You can’t use this feature again until you finish a long rest.',
      type: AbilityType.Other
    }
  ],
  cultures: ['culture:orc']
};

const culture: Culture = {
  id: 'culture:orc',
  name: 'Orc',
  description:
    'Some orcish communities exhibit a traditional culture, one that values physical ability, competition, and confidence. Others embrace technology and mechanical innovation. Orcish society is often familial and matriarchal, with a focus on providing for the community, especially via hunting, military training, or the construction of homes.',
  asi: {
    strength: 2,
    constitution: 1
  },
  alignment:
    'Orcish cultures tend toward a live-and-let-live worldview. People raised among orcs are not as often lawful, tending instead toward a more relaxed attitude.',
  abilities: [
    {
      id: 'culture:orc:ability:confident',
      name: 'Confident',
      description: 'You gain proficiency in the Intimidation skill.',
      type: AbilityType.Proficiency
    },
    {
      id: 'culture:orc:ability:powerfulAttacks',
      name: 'Powerful Attacks',
      description:
        'When you score a critical hit with a melee weapon attack, you can roll one of the weapon’s damage dice one additional time and add it to the extra damage of the critical hit.',
      type: AbilityType.Other
    },
    {
      id: 'culture:orc:ability:languages',
      name: 'Languages',
      description:
        'You can speak, read, and write Common and Orcish. Orcish is a guttural language with hard consonants. It is one of several languages written in the Dwarvish script.',
      type: AbilityType.Language
    }
  ],
  ancestries: ['ancestry:orc']
};

export const Orc: AncestryAndCulture = { ancestry, culture: [culture] };
