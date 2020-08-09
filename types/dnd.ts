export interface Condition {
  name: string;
  effects: string[];
}

export interface LootRecord {
  type: string;
  name: string;
  value: string;
  description: string;
  tags: string;
}

export interface Loot {
  type: string;
  name: string;
  value: string;
  description: string;
  tags: string[];
  minCR: number;
  source: string;
}
