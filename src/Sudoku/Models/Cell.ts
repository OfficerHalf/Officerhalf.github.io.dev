import { CellGroup } from './CellGroup';
import { CellNote } from './CellNote';
import { Coordinate } from './Coordinate';
import { CellCollection } from './CellCollection';

export class Cell {
    public allCells!: CellCollection;
    public position!: Coordinate;
    public sector!: CellGroup;
    public row!: CellGroup;
    public column!: CellGroup;
    public value: number;
    public note: CellNote;
    public editable: boolean;
    public valid: boolean;

    public constructor(value?: number, note?: CellNote, editable?: boolean, valid?: boolean) {
        this.value = value ? value : 0;
        this.note = note ? note : new CellNote();
        this.editable = editable !== undefined ? editable : true;
        this.valid = valid !== undefined ? valid : true;
    }

    public init(allCells: CellCollection, position: Coordinate, sector: CellGroup, row: CellGroup, column: CellGroup) {
        this.allCells = allCells;
        this.position = position;
        sector.cells.push(this);
        row.cells.push(this);
        column.cells.push(this);
        this.sector = sector;
        this.row = row;
        this.column = column;
    }
}
