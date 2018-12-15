import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Background from './andre-benz-1205144-unsplash.jpg';
import Projects from './ProjectsSection/ProjectsSection';
import './Home.scss';
import { CellCollection } from '../../Sudoku/Models/CellCollection';

const testBoard: string = '530070000600195000098000060800060003400803001700020006060000280000419005000080079';

export default class Home extends Component {
    public render() {
        const collection = new CellCollection(testBoard, 9);
        console.log(collection);
        return (
            <div className="HomeComponent" style={{backgroundImage: `url(${Background})`}}>
                <Navbar/>
                <Projects/>
            </div>
        );
    }
}
