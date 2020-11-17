import { Ancestry, Size, Speed, AbilityType, Culture, AncestryAndCulture } from 'src/models/ancestry-and-culture';

const ancestry: Ancestry = {
  id: 'ancestry:blinkDog',
  name: 'Blink Dog',
  description:
    'Blink dogs are canine in form, but they have intelligence and language as a human or elf might. They are quadrupedal and are otherwise entirely canine, requiring them to wear barding rather than armor, which can be acquired from any blacksmith, though it may cost more than standard armor. Beyond these features, blink dogs tend to have certain traits.',
  age: {
    text:
      'Blink dogs mature more quickly than humans, reaching maturity after about ten years. They live around a century.',
    adult: 10,
    old: 100
  },
  size: {
    text: 'Blink dogs are the size of large dogs like mastiffs. You size is Medium.',
    size: Size.Medium
  },
  speed: [{ mode: Speed.Walking, value: 40 }],
  abilities: [
    {
      id: 'ancestry:blinkDog:ability:feyCanine',
      name: 'Fey Canine',
      description:
        'You do not have hands, which makes certain tasks more difficult. You may struggle with things that require opposable thumbs and fine motor skills, such as thieves’ tools. At your GM’s discretion, you have disadvantage on Dexterity (Sleight of Hand) and Thieves’ Tools checks. You also cannot wield two-handed weapons, though you can wield one-handed weapons by gripping them in your mouth. You can use a paw for somatic spell components as well. Your creature type is Fey.',
      type: AbilityType.Other
    },
    {
      id: 'ancestry:blinkDog:ability:keenHearingAndSmell',
      name: 'Keen Hearing and Smell',
      description:
        'Blink dogs have the well-honed senses of a canine. You have advantage on Wisdom (Perception) checks that rely on hearing or smell.',
      type: AbilityType.Skill
    },
    {
      id: 'ancestry:blinkDog:ability:blink',
      name: 'Blink',
      description:
        'Blink dogs can teleport short distances several times a day. As a bonus action, you can magically teleport, along with any equipment you are wearing or carrying, up to 40 feet to an unoccupied space you can see. You can use this feature a number of times equal to your Wisdom modifier (a minimum of once). You regain any expended uses when you finish a short or long rest.',
      type: AbilityType.Other
    }
  ],
  cultures: ['culture:blinkDog']
};

const culture: Culture = {
  id: 'culture:blinkDog',
  name: 'Blink Dog',
  description:
    'Blink dogs usually form packs of extended kin, though they are very social creatures. They often incorporate others not of blink dog ancestry into their social circles as well. Sometimes these extended families of choice are itinerant, but other times they settle and form villages. Such communities have the feel of extended families even when their members are not related by blood. These communities tend to provide for themselves through hunting, especially ambush hunting. Those who grow up in blink dog communities have certain traits.',
  asi: {
    dexterity: 2,
    wisdom: 1
  },
  alignment: 'Blink dog communities tend to be principled and kind places. They lean toward goodness.',
  abilities: [
    {
      id: 'culture:blinkDog:ability:ambushHunters',
      name: 'Ambush Hunters',
      description:
        'Blink dog communities usually train their young in ambush hunting, leading them to be good at hiding in wait for their prey. You have proficiency in Stealth and Perception.',
      type: AbilityType.Proficiency
    },
    {
      id: 'culture:blinkDog:ability:languages',
      name: 'Languages',
      description: 'You speak, read, and write Common and Sylvan.',
      type: AbilityType.Language
    }
  ],
  ancestries: ['ancestry:blinkDog']
};

export const BlinkDog: AncestryAndCulture = { ancestry, culture: [culture] };
