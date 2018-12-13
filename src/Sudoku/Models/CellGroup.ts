import { Cell } from './Cell';

export class CellGroup {
    public cells: Cell[];

    constructor(cells?: Cell[]) {
        cells ? this.cells = cells : this.cells = [];
    }

    public validate(): boolean {
        const foundCells: any = {};
        let valid = true;
        this.cells.forEach(cell => {
            if (foundCells[cell.value]) {
                const existing = foundCells[cell.value] as Cell;
                existing.valid = false;
                cell.valid = false;
                valid = false;
            } else {
                foundCells[cell.value] = cell;
            }
        });
        return valid;
    }
    public contains(value: number): boolean {
        this.cells.forEach(cell => {
            if (cell.value === value) {
                return true;
            }
        });
        return false;
    }
}
