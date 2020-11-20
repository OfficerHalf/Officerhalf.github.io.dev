import { AbilityType, Ancestry, AncestryAndCulture, Culture, Size, Speed } from 'src/models/ancestry-and-culture';

const ancestry: Ancestry = {
  id: 'ancestry:dragonborn',
  name: 'Dragonborn',
  description:
    'Common wisdom is that those of dragonborn ancestry descend from real dragons, inheriting the color of their scales and their affinity for certain elements from those draconic forebears. Dragonborn culture, however, has little in common with that of dragons, having developed its own distinct beliefs and traditions.',
  age: {
    text:
      'Young dragonborn grow quickly. They walk hours after being born, attain the size and development of a 10-year-old human child by the age of 3, and reach adulthood by 15. They live to be around 80.',
    adult: 15,
    old: 80
  },
  size: {
    text:
      'Dragonborn are taller and heavier than humans, standing well over 6 feet tall and averaging almost 250 pounds. Your size is Medium.',
    height: {
      min: 6
    },
    weight: 250,
    size: Size.Medium
  },
  speed: { text: 'Your base walking speed is 30 feet.', modalities: [{ mode: Speed.Walking, value: 30 }] },
  abilities: [
    {
      id: 'ancestry:dragonborn:ability:draconicAncestry',
      name: 'Draconic Ancestry',
      description:
        'You have draconic ancestry. Choose one type of dragon from the Draconic Ancestry table. Your breath weapon and damage resistance are determined by the dragon type, as shown in the table.',
      type: AbilityType.Other
    },
    {
      id: 'ancestry:dragonborn:ability:breathWeapon',
      name: 'Breath Weapon',
      description:
        'You can use your action to exhale destructive energy. Your draconic ancestry determines the size, shape, and damage type of the exhalation.\nWhen you use your breath weapon, each creature in the area of the exhalation must make a saving throw, the type of which is determined by your draconic ancestry. The DC for this saving throw equals 8 + your Constitution modifier + your proficiency bonus. A creature takes 2d6 damage on a failed save, and half as much damage on a successful one. The damage increases to 3d6 at 6th level, 4d6 at 11th level, and 5d6 at 16th level.\nAfter you use your breath weapon, you can’t use it again until you complete a short or long rest.',
      type: AbilityType.Other
    },
    {
      id: 'ancestry:dragonborn:ability:damageResistance',
      name: 'Damage Resistance',
      description: 'Damage Resistance. You have resistance to the damage type associated with your draconic ancestry.',
      type: AbilityType.Resistance
    }
  ],
  cultures: ['culture:dragonborn']
};

const culture: Culture = {
  id: 'culture:dragonborn',
  name: 'Dragonborn',
  description:
    'Dragonborn culture is intense and exciting, leading those raised within it to be striking and remarkable individuals. Grand festivals and elaborate holidays are frequent, each centered around a different physical competition or performance. In general, practices in dragonborn culture and education tend to promote athleticism and personal character.',
  asi: {
    strength: 2,
    charisma: 1
  },
  alignment:
    'Because dragonborn culture values intense commitments and expression, many raised in this culture find themselves drawn to one side or the other in the cosmic war between good and evil. Most dragonborn are good, but those who side with evil can be terrible villains.',
  abilities: [
    {
      id: 'culture:dragonborn:ability:languages',
      name: 'Languages',
      description:
        'You can speak, read, and write Common and Draconic. Draconic is thought to be one of the oldest languages and is often used in the study of magic. The language sounds harsh to most other creatures and includes numerous hard consonants and sibilants.',
      type: AbilityType.Language
    },
    {
      id: 'culture:dragonborn:ability:dragonLore',
      name: 'Dragon Lore',
      description:
        'Dragonborn communities are often proud of their draconic heritage. You have advantage on any Intelligence checks to recall information about dragons.',
      type: AbilityType.Skill
    }
  ],
  ancestries: ['ancestry:dragonborn']
};

export const Dragonborn: AncestryAndCulture = { ancestry, culture: [culture] };
