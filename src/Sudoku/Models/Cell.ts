import { Coordinate } from './Coordinate';

export class Cell {
    public position: Coordinate;
    public value: number;
    public neighbors: Set<Coordinate>;

    constructor(position: Coordinate, value: number = 0) {
        this.position = position;
        this.value = value;
        this.neighbors = new Set();
    }

    public setNeighbors(allCoordinates: Set<Coordinate>): void {
        this.neighbors = new Set<Coordinate>();
        const x1 = Math.floor(this.position.x / 3);
        const y1 = Math.floor(this.position.y / 3);

        allCoordinates.forEach((coord: Coordinate) => {
            if (this.isMyNeighbor(coord, x1, y1)) {
                this.neighbors.add(coord);
            }
        });
    }

    private isMyNeighbor(coord: Coordinate, x1: number, y1: number): boolean {
        // same coordinate
        if (this.position === coord) {
            return false;
        } else if (this.position.x === coord.x || this.position.y === coord.y) { // same row or column
            return true;
        }
        // Same ninth
        const x2 = Math.floor(coord.x / 3);
        const y2 = Math.floor(coord.y / 3);
        return x1 === x2 && y1 === y2;
    }
}

export interface CellMap {
    [x: string]: Cell;
}
