import { BasicMetadata } from '../../shared/interfaces/butter.interface';

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
