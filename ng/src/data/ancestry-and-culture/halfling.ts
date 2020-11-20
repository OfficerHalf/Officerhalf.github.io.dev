import { AbilityType, Ancestry, AncestryAndCulture, Culture, Size, Speed } from 'src/models/ancestry-and-culture';

const ancestry: Ancestry = {
  id: 'ancestry:halfling',
  name: 'Halfling',
  description:
    'The origins of halfling ancestry are a mystery, though tales in halfling culture mention that their forbearers wandered far and wide before settling down into small pastoral communities.',
  age: {
    text: 'A halfling reaches adulthood at the age of 20 and generally lives into the middle of their second century.',
    adult: 20,
    old: 150
  },
  size: {
    size: Size.Small,
    text: 'Halflings average about 3 feet tall and weigh about 40 pounds. Your size is Small.',
    height: {
      max: 3
    },
    weight: 40
  },
  speed: { text: 'Your base walking speed is 25 feet.', modalities: [{ mode: Speed.Walking, value: 25 }] },
  abilities: [
    {
      id: 'ancestry:halfling:ability:halflingNimbleness',
      name: 'Halfling Nimbleness',
      description: 'You can move through the space of any creature that is of a size larger than yours.',
      type: AbilityType.Other
    },
    {
      id: 'ancestry:halfling:ability:lucky',
      name: 'Lucky',
      description:
        'When you roll a 1 on the d20 for an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll.',
      type: AbilityType.Other
    },
    {
      id: 'ancestry:halfling:ability:naturallyStealthy',
      name: 'Naturally Stealthy',
      description:
        'You can attempt to hide even when you are obscured only by a creature that is at least one size larger than you.',
      type: AbilityType.Other
    }
  ],
  cultures: ['culture:lightfootHalfling']
};

const lightfootHalflingCulture: Culture = {
  id: 'culture:lightfootHalfling',
  name: 'Lightfoot Halfling',
  description:
    'Lightfoot halfling culture is warm and welcoming, placing value in hospitality and good neighborliness. Those who grew up among halflings often make good comrades and allies.',
  asi: {
    dexterity: 2,
    charisma: 1
  },
  alignment:
    'Halfling society also tends toward neatness, both in their physical spaces and in their social relations. As a rule, they are good-hearted and kind, hate to see others in pain, and have no tolerance for oppression. They are also orderly and traditional, leaning heavily on the support of their community and the comfort of their old ways.',
  abilities: [
    {
      id: 'culture:lightfootHalfling:ability:brave',
      name: 'Brave',
      description: 'You have advantage on saving throws against being frightened.',
      type: AbilityType.Resistance
    },
    {
      id: 'culture:lightfootHalfling:ability:languages',
      name: 'Languages',
      description:
        'You can speak, read, and write Common and Halfling. The Halfling language isn’t secret, but members of halfling culture are loath to share it with others. They write very little, so they don’t have a rich body of literature. Their oral tradition, however, is very strong. Almost all people in halfling societies speak Common to converse with the people in whose lands they dwell or through which they are traveling.',
      type: AbilityType.Language
    }
  ],
  ancestries: ['ancestry:halfling']
};

export const Halfling: AncestryAndCulture = { ancestry, culture: [lightfootHalflingCulture] };
