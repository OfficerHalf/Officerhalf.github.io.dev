import { Injectable } from '@angular/core';
import { Ability, Ancestry, Culture, Ref } from 'src/models/ancestry-and-culture';
import data from 'src/data/ancestry-and-culture';
import { Subject, of, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AncestryAndCultureService {
  public ancestry$: BehaviorSubject<Ancestry> = new BehaviorSubject(null);
  public culture$: BehaviorSubject<Culture> = new BehaviorSubject(null);

  constructor() {}

  // State
  setCurrentAncestry(newAncestry: Ancestry | null): void {
    this.ancestry$.next(newAncestry);
  }

  setCurrentCulture(newCulture: Culture | null): void {
    this.culture$.next(newCulture);
  }

  // API / data
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
