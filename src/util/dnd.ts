import { Condition } from '../../types/dnd';

export const conditions: Condition[] = [
  {
    name: 'Blinded',
    effects: [
      "A blinded creature can't see and automatically fails any ability check that requires sight.",
      "Attack rolls against the creature have advantage, and the creature's attack rolls have disadvantage."
    ]
  },
  {
    name: 'Charmed',
    effects: [
      "A charmed creature can't attack the charmer or target the charmer with harmful abilities or magical effects.",
      'The charmer has advantage on any ability check to interact socially with the creature.'
    ]
  },
  {
    name: 'Deafened',
    effects: ["A deafened creature can't hear and automatically fails any ability check that requires hearing."]
  },
  {
    name: 'Frightened',
    effects: [
      'A frightened creature has disadvantage on ability checks and attack rolls while the source of its fear is within line of sight.',
      "The creature can't willingly move closer to the source of its fear."
    ]
  },
  {
    name: 'Grappled',
    effects: [
      "A grappled creature's speed becomes 0, and it can't benefit from any bonus to its speed.",
      'The condition ends if the grappler is incapacitated.',
      'The condition also ends if an effect removes the grappled creature from the reach of the grappler or grappling effect, such as when a creature is hurled away by the thunderwave spell.'
    ]
  },
  {
    name: 'Incapacitated',
    effects: ["An incapacitated creature can't take actions or reactions."]
  },
  {
    name: 'Invisible',
    effects: [
      "An invisible creature is impossible to see without the aid of magic or a special sense. For the purpose of hiding, the creature is heavily obscured. The creature's location can be detected by any noise it makes or any tracks it leaves.",
      "Attack rolls against the creature have disadvantage, and the creature's attack rolls have advantage."
    ]
  },
  {
    name: 'Paralyzed',
    effects: [
      "A paralyzed creature is incapacitated and can't move or speak.",
      'The creature automatically fails Strength and Dexterity saving throws. Attack rolls against the creature have advantage.',
      'Any attack that hits the creature is a critical hit if the attacker is within 5 feet of the creature.'
    ]
  },
  {
    name: 'Petrified',
    effects: [
      'A petrified creature is transformed, along with any nonmagical object it is wearing or carrying, into a solid inanimate substance (usually stone). Its weight increases by a factor of ten, and it ceases aging.',
      "The creature is incapacitated, can't move or speak, and is unaware of its surroundings.",
      'Attack rolls against the creature have advantage.',
      'The creature automatically fails Strength and Dexterity saving throws.',
      'The creature has resistance to all damage.',
      'The creature is immune to poison and disease, although a poison or disease already in its system is suspended, not neutralized.'
    ]
  },
  {
    name: 'Poisoned',
    effects: ['A poisoned creature has disadvantage on attack rolls and ability checks.']
  },
  {
    name: 'Prone',
    effects: [
      "A prone creature's only movement option is to crawl, unless it stands up and thereby ends the condition.",
      'The creature has disadvantage on attack rolls.',
      'An attack roll against the creature has advantage if the attacker is within 5 feet of the creature. Otherwise, the attack roll has disadvantage.'
    ]
  },
  {
    name: 'Restrained',
    effects: [
      "A restrained creature's speed becomes 0, and it can't benefit from any bonus to its speed.",
      "Attack rolls against the creature have advantage, and the creature's attack rolls have disadvantage.",
      'The creature has disadvantage on Dexterity saving throws.'
    ]
  },
  {
    name: 'Stunned',
    effects: [
      "A stunned creature is incapacitated, can't move, and can speak only falteringly.",
      'The creature automatically fails Strength and Dexterity saving throws.',
      'Attack rolls against the creature have advantage.'
    ]
  },
  {
    name: 'Unconscious',
    effects: [
      "An unconscious creature is incapacitated, can't move or speak, and is unaware of its surroundings.",
      "The creature drops whatever it's holding and falls prone.",
      'The creature automatically fails Strength and Dexterity saving throws.',
      'Attack rolls against the creature have advantage.',
      'Any attack that hits the creature is a critical hit if the attacker is within 5 feet of the creature.'
    ]
  }
];
