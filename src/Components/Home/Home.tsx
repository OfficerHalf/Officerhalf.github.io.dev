import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Background from './andre-benz-1205144-unsplash.jpg';
import Projects from './ProjectsSection/ProjectsSection';
import './Home.scss';

export default class Home extends Component {
    public render() {
        return (
            <div className="HomeComponent" style={{backgroundImage: `url(${Background})`}}>
                <Navbar/>
                <Projects/>
            </div>
        );
    }
}
