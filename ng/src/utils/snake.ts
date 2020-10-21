import { Board, BoardRow, Direction, Position } from 'src/models/snake';

export function move(start: Position, direction: Direction): Position {
  switch (direction) {
    case Direction.East:
      return { x: start.x + 1, y: start.y };
    case Direction.North:
      return { x: start.x, y: start.y - 1 };
    case Direction.South:
      return { x: start.x, y: start.y + 1 };
    case Direction.West:
      return { x: start.x - 1, y: start.y };
  }
}

export function createBoard(sizeX: number, sizeY: number): Board {
  const board: Board = [];
  for (let y = 0; y < sizeY; y++) {
    const row: BoardRow = [];
    for (let x = 0; x < sizeX; x++) {
      row.push({ x, y });
    }
    board.push(row);
  }
  return board;
}
