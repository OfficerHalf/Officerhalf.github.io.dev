export interface Loot {
    value: string;
    description: string;
    item: string;
    image?: string;
}

export interface LootMap {
    [x: string]: Loot[];
}

export interface LootType {
    name: string;
    image?: string;
    items: Loot[];
}

export interface ButterResponseLoot {
    data: {
        loot: Loot[];
    };
}

export interface ButterResponseLootType {
    data: {
        loot_types: LootType[];
    };
}
