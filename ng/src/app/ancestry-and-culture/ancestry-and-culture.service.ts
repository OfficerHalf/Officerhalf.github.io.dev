import { Injectable } from '@angular/core';
import { Ability, Ancestry, Culture, Ref } from 'src/models/ancestry-and-culture';
import data from 'src/data/ancestry-and-culture';

@Injectable({
  providedIn: 'root'
})
export class AncestryAndCultureService {
  constructor() {}

  getAncestryList(): Ref[] {
    return data.reducedAncestries;
  }

  getCultureList(): Ref[] {
    return data.reducedCultures;
  }

  getCulture(id: string): Culture {
    return data.cultures[id];
  }

  getAncestry(id: string): Ancestry {
    return data.ancestries[id];
  }

  getAbility(id: string): Ability {
    return data.abilities[id];
  }
}
