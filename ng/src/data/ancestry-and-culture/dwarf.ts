import { AbilityType, Ancestry, AncestryAndCulture, Culture, Size, Speed } from 'src/models/ancestry-and-culture';

const ancestry: Ancestry = {
  id: 'ancestry:dwarf',
  name: 'Dwarf',
  description:
    'The origins of dwarves are shrouded in myth, with some saying that their ancestors were fashioned from the very stone itself. Dwarven culture reflects this tradition, often celebrating practices related to the working of stone and metal.',
  age: {
    text:
      'Dwarves mature at the same rate as humans, but they’re considered young until they reach the age of 50. On average, they live about 350 years.',
    adult: 50,
    old: 350
  },
  speed: {
    text: 'Your base walking speed is 25 feet. Your speed is not reduced by wearing heavy armor.',
    modalities: [
      {
        mode: Speed.Walking,
        value: 25
      }
    ]
  },
  size: {
    text: 'Dwarves stand between 4 and 5 feet tall and average about 150 pounds. Your size is Medium.',
    size: Size.Medium,
    height: {
      min: 4,
      max: 5
    },
    weight: 150
  },
  abilities: [
    {
      id: 'ancestry:dwarf:ability:walkingSpeed',
      name: 'Walking Speed',
      description: 'You are not slowed by armor.',
      type: AbilityType.Speed
    },
    {
      id: 'ancestry:dwarf:ability:darkvision',
      name: 'Darkvision',
      description:
        'Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.',
      type: AbilityType.Other
    },
    {
      id: 'ancestry:dwarf:ability:dwarvenResilience',
      name: 'Dwarven Resilience',
      description:
        'You have advantage on saving throws against poison, and you have resistance against poison damage, most likely a feature of you ancestors’ diet.',
      type: AbilityType.Resistance
    },
    {
      id: 'ancestry:dwarf:ability:dwarvenToughness',
      name: 'Dwarven Toughness',
      description:
        'Your hit point maximum increases by 1, and it increases by 1 every time you gain a level, due in large part to the long history of difficult labor required to survive underground for generations.',
      type: AbilityType.Other
    }
  ],
  cultures: ['culture:hillDwarf']
};

const hillDwarfCulture: Culture = {
  id: 'culture:hillDwarf',
  name: 'Hill Dwarf',
  description:
    'Characters who grows up in a hill dwarven community take on several distinctive cultural traits, in part due to their long history living underground and valuing of skill with traditional dwarven weapons and crafts. Dwarven culture values perseverance in labor and the maintenance of their traditions. Further, respect is shown for their wise elders.',
  asi: {
    constitution: 2,
    wisdom: 1
  },
  alignment:
    'Dwarven society is well-ordered, with strict laws and customs governing behavior. As a result, the culture tends to promote lawful values, with a strong sense of fair play and a belief that everyone deserves to share in the benefits of a just order.',
  abilities: [
    {
      id: 'culture:hillDwarf:ability:dwarvenCombatTraining',
      name: 'Dwarven Combat Training',
      description: 'You have proficiency with the battleaxe, handaxe, light hammer, and warhammer.',
      type: AbilityType.Proficiency
    },
    {
      id: 'culture:hillDwarf:ability:toolProficiency',
      name: 'Tool Proficiency',
      description:
        'You gain proficiency with the artisan’s tools of your choice: smith’s tools, brewer’s supplies, mechanic’s tools, or mason’s tools.',
      type: AbilityType.Proficiency
    },
    {
      id: 'culture:hillDwarf:ability:stonecunning',
      name: 'Stonecunning',
      description:
        'Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus.',
      type: AbilityType.Skill
    },
    {
      id: 'culture:hillDwarf:ability:languages',
      name: 'Languages',
      description:
        'You can speak, read, and write Common and Dwarvish. Dwarvish is full of hard consonants and guttural sounds, and those characteristics spill over into whatever other language you might might speak.',
      type: AbilityType.Language
    }
  ],
  ancestries: ['ancestry:dwarf']
};

export const Dwarf: AncestryAndCulture = { ancestry, culture: [hillDwarfCulture] };
