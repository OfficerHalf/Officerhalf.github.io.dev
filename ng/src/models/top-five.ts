export enum Category {
  Album,
  Book,
  Movie,
  Meme,
  Game
}

export interface Top {
  name: string;
  explanation: string;
  rank: number;
}
