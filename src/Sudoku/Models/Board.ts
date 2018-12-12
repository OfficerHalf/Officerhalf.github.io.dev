import { Coordinate } from './Coordinate';
import { Cell, CellMap } from './Cell';

export class Board {
    public positions: Set<Coordinate>;
    public cells: CellMap;
    constructor(init?: number[][]) {
        this.positions = new Set();
        this.cells = {};
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                const position = new Coordinate(i, j);
                let cell;
                init ? cell = new Cell(position, init[i][j]) : cell = new Cell(position);
                this.positions.add(position);
                this.cells[this.getCellMapKey(position)] = cell;
            }
        }
    }

    public set(position: Coordinate, value: number) {
        this.cells[this.getCellMapKey(position)].value = value;
    }

    private getCellMapKey(position: Coordinate): string {
        return `${position.x},${position.y}`;
    }
}
