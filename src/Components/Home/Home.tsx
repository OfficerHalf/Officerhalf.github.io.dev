import React, { Component } from 'react';
import './Home.scss';
import ButterCmsProvider from '../../Providers/ButterCmsProvider';
import { Project } from '../../Models/Project';
import Photo from './Photo/Photo';
import NameCard from './NameCard/NameCard';
import Contact from './Contact/Contact';
import About from './About';

// const testBoard: string = '530070000600195000098000060800060003400803001700020006060000280000419005000080079';

const Experience = () => <h2>Experience</h2>;
const Education = () => <h2>Education</h2>;

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
        return (
            <div className="HomeComponent">
                <div className="top">
                    <Photo/>
                    <NameCard/>
                </div>
                <div className="columns">
                    <div className="leftColumn">
                        <About/>
                        <Contact/>
                    </div>
                    <div className="rightColumn">
                        <Experience/>
                        <Education/>
                    </div>
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
