import { AbilityType, Ancestry, AncestryAndCulture, Culture, Size, Speed } from 'src/models/ancestry-and-culture';

const ancestry: Ancestry = {
  id: 'ancestry:gnome',
  name: 'Gnome',
  description:
    'Some scholars in gnomish culture recount tales of gnomes shaped from ancient, magical gems, perhaps with the aid of a god. Gem crafting is a skill valued in gnomish culture to this day.',
  age: {
    text:
      'Gnomes mature at the same rate humans do, and most are expected to settle down into an adult life by around age 40. They can live 350 to almost 500 years.',
    adult: 40,
    old: 500
  },
  size: {
    text: 'Gnomes are between 3 and 4 feet tall and average about 40 pounds. Your size is Small.',
    size: Size.Small,
    height: { min: 3, max: 4 },
    weight: 40
  },
  speed: [{ mode: Speed.Walking, value: 25 }],
  abilities: [
    {
      id: 'ancestry:gnome:ability:darkvision',
      name: 'Darkvision',
      description:
        'Your ancestors were accustomed to life underground. You have superior vision in dark and dim conditions. You have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.',
      type: AbilityType.Other
    },
    {
      id: 'ancestry:gnome:ability:gnomeCunning',
      name: 'Gnome Cunning',
      description: 'You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic.',
      type: AbilityType.Resistance
    }
  ],
  cultures: ['culture:rockGnome']
};

const rockGnomeCulture: Culture = {
  id: 'culture:rockGnome',
  name: 'Rock Gnome',
  description:
    'Rock gnomish culture and education tend to promote cleverness and ingenuity, qualities that produce many inventors of great renown.',
  asi: {
    intelligence: 2,
    constitution: 1
  },
  alignment:
    'Gnomish culture also values kindness and harmony. Many culturally gnomish people work to uphold harmonious relations or apply their ingenuity to better their fellows, often as sages, engineers, researchers, scholars, investigators, or inventors. Others take a more personal approach to these values, becoming minstrels, tricksters, wanderers, or fanciful jewelers. Those raised among gnomish society are generally good-hearted, and even the tricksters among them are more playful than vicious.',
  abilities: [
    {
      id: 'culture:rockGnome:ability:artificersLore',
      // tslint:disable-next-line: quotemark
      name: "Artificer's Lore",
      description:
        'Whenever you make an Intelligence (History) check related to magic items, alchemical objects, or technological devices, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus.',
      type: AbilityType.Skill
    },
    {
      id: 'culture:rockGnome:ability:languages',
      name: 'Languages',
      description:
        'You can speak, read, and write Common and Gnomish. The Gnomish language, which uses the Dwarvish script, is renowned for its technical treatises and its catalogs of knowledge about the natural world.',
      type: AbilityType.Language
    },
    {
      id: 'culture:rockGnome:ability:tinker',
      name: 'Tinker',
      description:
        'You have proficiency with artisan’s tools (tinker’s tools). Using those tools, you can spend 1 hour and 10 gp worth of materials to construct a Tiny clockwork device (AC 5, 1 hp). The device ceases to function after 24 hours (unless you spend 1 hour repairing it to keep the device functioning), or when you use 17 your action to dismantle it; at that time, you can reclaim the materials used to create it. You can have up to three such devices active at a time\nWhen you create a device, choose one of the following options:\n- *Clockwork Toy.* This toy is a clockwork animal, monster, or person, such as a frog, mouse, bird, dragon, or soldier. When placed on the ground, the toy moves 5 feet across the ground on each of your turns in a random direction. It makes noises as appropriate to the creature it represents.\n- *Fire Starter.* The device produces a miniature flame, which you can use to light a candle, torch, or campfire. Using the device requires your action.\n- *Music Box.* When opened, this music box plays a single song at a moderate volume. The box stops playing when it reaches the song’s end or when it is closed.',
      type: AbilityType.Other
    }
  ],
  ancestries: ['ancestry:gnome']
};

export const Gnome: AncestryAndCulture = { ancestry, culture: [rockGnomeCulture] };
