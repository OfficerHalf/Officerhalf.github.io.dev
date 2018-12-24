import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Projects from './ProjectsSection/ProjectsSection';
import About from './AboutSection/AboutSection';
import Contact from './ContactSection/ContactSection';
import './Home.scss';
import { CellCollection } from '../../Sudoku/Models/CellCollection';
import ButterCmsProvider from '../../Providers/ButterCmsProvider';
import { Project } from '../../Models/Project';

const testBoard: string = '530070000600195000098000060800060003400803001700020006060000280000419005000080079';

interface HomeState {
    projects: Project[];
}

export default class Home extends Component<{}, HomeState> {
    private butterProvider: ButterCmsProvider = new ButterCmsProvider();
    constructor(props: {}) {
        super(props);
        this.state = {
            projects: []
        };
    }
    public render() {
        const collection = new CellCollection(testBoard, 9);
        console.log(collection);
        return (
            <div className="HomeComponent">
                <Navbar/>
                <div className="sections">
                    <About/>
                    <Projects projects={this.state.projects}/>
                    <Contact/>
                </div>
            </div>
        );
    }

    public componentDidMount(): void {
        this.butterProvider.getProjects().then(projects => {
            this.setState({projects});
        });
    }
}
