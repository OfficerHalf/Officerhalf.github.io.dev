import { Injectable } from '@angular/core';
import { BattlemapPage } from '../interfaces/battlemap.interface';

import BattlemapList from '../../../.battlemaplist.json';
import BattlemapMap from '../../../.battlemapmap.json';

@Injectable({
  providedIn: 'root'
})
export class BattlemapService {
  private readonly battlemapList: BattlemapPage[] = BattlemapList as BattlemapPage[];
  private readonly battlemapMap: Record<string, number> = BattlemapMap;
  constructor() {}

  getBattlemapList(): BattlemapPage[] {
    return this.battlemapList;
  }

  getBattlemap(slug: string): BattlemapPage | undefined {
    const index = this.battlemapMap[slug];
    if (index !== undefined && index >= 0 && index < this.battlemapList.length) {
      return this.battlemapList[index];
    }
    return undefined;
  }
}
