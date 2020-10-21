export type Board = BoardRow[];

export type BoardRow = string[];
export type Snake = Position[];

export interface Position {
  x: number;
  y: number;
}

export const UI = {
  snake: 'S',
  food: 'F'
};

export enum Direction {
  North = 0,
  South = 1,
  East = 2,
  West = 3
}
