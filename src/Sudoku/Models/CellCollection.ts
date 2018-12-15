import { Cell } from './Cell';
import { Coordinate } from './Coordinate';
import { CellNote } from './CellNote';
import { CellGroup } from './CellGroup';

const BOARD_SIZE = 9; // will be able to change this later. Should work with any non-prime number;

// Represents a single sudoku game.
export class CellCollection {
    public cells: Cell[][];
    public sectors: CellGroup[] = [];
    public rows: CellGroup[] = [];
    public cols: CellGroup[] = [];
    public size: number;
    private sectorDimensions: Coordinate;

    constructor(boardString?: string, size: number = BOARD_SIZE) {
        this.size = size;

        // Get sector dimensions
        this.sectorDimensions = this.getSectorDimensions(size);

        // transform string board into 2d array of cells
        this.cells = boardString ? this.transformBoard(boardString, size) : this.transformBoard('', size);

        // Create the cells
        for (let r = 0; r < size; r++) {
            const column: Cell[] = [];
            for (let c = 0; c < size; c++) {
                column.push(new Cell());
            }
        }

        // Add empty sectors
        for (let i = 0; i < size; i++) {
            const sector = new CellGroup();
            this.sectors.push(sector);
        }

        // Get rows + columns + sectors
        for (let i = 0; i < size; i++) {
            const row = new CellGroup();
            const col = new CellGroup();
            for (let j = 0; j < size; j++) {
                row.cells.push(this.cells[i][j]);
                col.cells.push(this.cells[j][i]);

                this.sectors[this.getSectorIndex(i, j)].cells.push(this.cells[i][j]);
            }
            this.rows.push(row);
            this.cols.push(col);
        }

        // init the cells
        for (let row = 0; row < size; row++) {
            for (let col = 0; col < size; col++) {
                this.cells[row][col].init(this, new Coordinate(row, col), this.sectors[this.getSectorIndex(row, col)], this.rows[row], this.cols[col]);
            }
        }
    }

    public updateCell(row: number, col: number, value: number) {
        const cell = this.cells[row][col];
        if (cell && cell.editable && cell.value !== value) {
            this.markAllCellsValid();
            cell.value = value;
            this.validate();
        }
    }

    public validate() {
        for (let i = 0; i < this.size; i++) {
            this.rows[i].validate();
            this.cols[i].validate();
            this.sectors[i].validate();
        }
    }

    public markAllCellsValid(): void {
        this.cells.forEach((row) => {
            row.forEach((cell) => {
                cell.valid = true;
            });
        });
    }

    public isCompleted(): boolean {
        this.cells.forEach((row) => {
            row.forEach((cell) => {
                if (cell.value === 0 || !cell.valid) {
                    return false;
                }
            });
        });
        return true;
    }

    private getSectorDimensions(size: number): Coordinate {
        // If the number has a whole square root, use that
        const sqrt = Math.sqrt(size);
        if (Math.floor(sqrt) === sqrt) {
            return new Coordinate(sqrt, sqrt);
        }

        // Find all factors of given number; WARNING: don't do this with arbitrarily large values.
        const factors: number[] = [1];
        for (let i = 2; i <= size; i++) {
            if (size % i === 0) {
                factors.push(i);
            }
        }
        const middle = factors.length - 1;
        const rows = factors[Math.floor(middle)];
        const cols = factors[Math.ceil(middle)];
        return new Coordinate(rows, cols);
    }

    private getSectorIndex(row: number, col: number): number {
        // Sector
        // Math: ex, 9 sectors, 3x3.
        // Floor(col / 3) * 3 + Floor(row / 3) = sector index
        return (Math.floor(col / this.sectorDimensions.col) * this.sectorDimensions.col) + (Math.floor(row / this.sectorDimensions.row));
    }

    private transformBoard(input: string, size: number): Cell[][] {
        if (input.length === 0 || input.length !== (size * size)) {
            return this.generateEmptyBoard(size);
        }
        // iterate through every number in the input. split them into rows and columns.
        const output: Cell[][] = [];
        for (let i = 0, row = 0, col = 0; i < input.length; i++) {
            const value = parseInt(input[i]);
            if (col === 0) {
                output[row] = [];
            }
            // Create a new cell with this value, empty note. If value === 0, it's editable.
            output[row][col] = new Cell(value, new CellNote(), value === 0);
            col++;
            if (col === size) {
                row++;
                col = 0;
            }
        }
        return output;
    }

    private generateEmptyBoard(size: number): Cell[][] {
        const row: Cell[] = [];
        const output: Cell[][] = [];
        for (let i = 0; i < size; i++) {
            row.push(new Cell(0));
        }
        for (let i = 0; i < size; i++) {
            output.push(row);
        }
        return output;
    }
}
