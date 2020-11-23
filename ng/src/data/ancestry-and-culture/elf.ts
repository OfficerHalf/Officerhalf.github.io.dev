import { AbilityType, Ancestry, AncestryAndCulture, Culture, Size, SpeedType } from 'src/models/ancestry-and-culture';

const ancestry: Ancestry = {
  id: 'ancestry:elf',
  name: 'Elf',
  description:
    'A legend among elven communities describes how the first elves sprang from the dripping blood of their god when they were stabbed in battle, while others say that elves descended from their cousins in the Feywild.',
  age: {
    text:
      'Although elves reach physical maturity at about the same age as humans, the elven understanding of adulthood goes beyond physical growth to encompass worldly experience. An elf typically claims adulthood and an adult name around the age of 100 and can live to be 750 years old.',
    adult: 100,
    old: 750
  },
  size: {
    text: 'Elves range from under 5 to over 6 feet tall and have slender builds. Your size is Medium.',
    size: Size.Medium,
    height: {
      min: 5,
      max: 6
    }
  },
  speed: {
    text: 'Your base walking speed is 30 feet.',
    modalities: [
      {
        mode: SpeedType.Walking,
        value: 30
      }
    ]
  },
  abilities: [
    {
      id: 'ancestry:elf:ability:darkvision',
      name: 'Darkvision',
      description:
        'Historically accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.',
      type: AbilityType.Other
    },
    {
      id: 'ancestry:elf:ability:keenSenses',
      name: 'Keen Senses',
      description: 'You have proficiency in the Perception skill, a trait that all people with elven ancestry share.',
      type: AbilityType.Proficiency
    },
    {
      id: 'ancestry:elf:ability:feyAncestry',
      name: 'Fey Ancestry',
      description:
        'Thanks to your fey heritage, you have advantage on saving throws against being charmed, and magic can’t put you to sleep.',
      type: AbilityType.Resistance
    },
    {
      id: 'ancestry:elf:ability:trance',
      name: 'Trance',
      description:
        'Elves don’t need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. (The Common word for such meditation is “trance.”) While meditating, you can dream after a fashion. After resting in this way, you gain the same benefits that other humanoids do from 8 hours of sleep.',
      type: AbilityType.Other
    }
  ],
  cultures: ['culture:highElf']
};

const highElfCulture: Culture = {
  id: 'culture:highElf',
  name: 'High Elf',
  description:
    'High elven culture is rich in traditions and history, celebrating their long legacy of scholarship, acumen, and dance. Those who grow up immersed in this culture often take on certain traits.',
  asi: {
    dexterity: 2,
    intelligence: 1
  },
  alignment:
    'The elven culture values freedom, variety, and self-expression, so those who grow up in it may lean toward the gentler aspects of chaos. Elven culture tends to value and protect others’ freedom as well as their own.',
  abilities: [
    {
      id: 'culture:highElf:ability:languages',
      name: 'Languages',
      description:
        'You can speak, read, and write Common and Elvish. Elvish is fluid, with subtle intonations and intricate grammar. Elven literature is rich and varied, and their songs and poems are famous among other cultures. Many bards learn their language so they can add Elvish ballads to their repertoires.',
      type: AbilityType.Language
    },
    {
      id: 'culture:highElf:ability:elvenWeaponTraining',
      name: 'Elven Weapon Training',
      description: 'You have proficiency with the longsword, shortsword, shortbow, and longbow.',
      type: AbilityType.Proficiency
    },
    {
      id: 'culture:highElf:ability:cantrip',
      name: 'Cantrip',
      description:
        'You know one cantrip of your choice from the wizard spell list. Intelligence is your spellcasting ability for it.',
      type: AbilityType.Other
    },
    {
      id: 'culture:highElf:ability:extraLanguage',
      name: 'Extra Language',
      description: 'You can speak, read, and write one extra language of your choice.',
      type: AbilityType.Language
    }
  ],
  ancestries: ['ancestry:elf']
};

export const Elf: AncestryAndCulture = { ancestry, culture: [highElfCulture] };
