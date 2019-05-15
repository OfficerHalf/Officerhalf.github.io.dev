import * as React from 'react';
import { CellCollection } from '../Models/CellCollection';

const testBoard: string =
    '530070000600195000098000060800060003400803001700020006060000280000419005000080079';

export default class Board extends React.Component {
    public render() {
        const board = new CellCollection(testBoard);
        const rows: JSX.Element[] = [];
        board.cells.forEach(row => {
            const cells: JSX.Element[] = [];
            row.forEach(cell => {
                cells.push(<span style={{ margin: 10 }}>{cell.value}</span>);
            });
            rows.push(<div>{cells}</div>);
        });
        return <div>{rows}</div>;
    }
}
