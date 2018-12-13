import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Background from './andre-benz-1205144-unsplash.jpg';
import Projects from './ProjectsSection/ProjectsSection';
import './Home.scss';

// const testBoard: number[][] = [
//     [5,3,0,0,7,0,0,0,0],
//     [6,0,0,1,9,5,0,0,0],
//     [0,9,8,0,0,0,0,6,0],
//     [8,0,0,0,6,0,0,0,3],
//     [4,0,0,8,0,3,0,0,1],
//     [7,0,0,0,2,0,0,0,6],
//     [0,6,0,0,0,0,2,8,0],
//     [0,0,0,4,1,9,0,0,5],
//     [0,0,0,0,8,0,0,7,9]
// ];

export default class Home extends Component {
    public render() {
        // const x = new Board(testBoard);
        // console.log(x);
        return (
            <div className="HomeComponent" style={{backgroundImage: `url(${Background})`}}>
                <Navbar/>
                <Projects/>
            </div>
        );
    }
}
