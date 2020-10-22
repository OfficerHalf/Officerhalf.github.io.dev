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
      row.push('');
    }
    board.push(row);
  }
  return board;
}

/**
 * Shuffles array in place. ES6 version
 * @param {Array} a items An array containing the items.
 */
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function randomChoice<T>(a: T[], n: number = 1): T[] {
  const shuffled = shuffle(a);
  return shuffled.slice(0, n);
}

export function oppositeDirection(currentDir: Direction, newDir: Direction): boolean {
  return (
    (currentDir === Direction.North && newDir === Direction.South) ||
    (currentDir === Direction.East && newDir === Direction.West) ||
    (currentDir === Direction.South && newDir === Direction.North) ||
    (currentDir === Direction.West && newDir === Direction.East)
  );
}
