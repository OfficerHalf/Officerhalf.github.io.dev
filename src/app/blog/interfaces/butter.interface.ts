export interface Ref {
  name: string;
  slug: string;
}

export interface BasicMetadata {
  published: string;
  slug: string;
  updated: string;
}

export interface ListResponse<T> {
  meta: {
    count: number;
    next_page: number | null;
    previous_page: number | null;
  };
  data: T[];
}

export interface ApiResponse<T> {
  data: T;
}

export enum BattlemapType {
  Dungeondraft = 'dungeondraft',
  Wonderdraft = 'wonderdraft',
  DungeonBuilder = 'dungeon-builder',
  Other = 'other'
}

export interface BattlemapPage extends BasicMetadata {
  name: string;
  page_type: 'battlemap';
  fields: {
    description: string;
    images: {
      title: string;
      map: string;
    }[];
    download_links: {
      text: string;
      url: string;
    }[];
    made_in: BattlemapType;
  };
}
