import React, { Component } from 'react';
import './Home.scss';
import ButterCmsProvider from '../../Providers/ButterCmsProvider';
import { Project } from '../../Models/Project';
import Photo from './Photo/Photo';
import NameCard from './NameCard/NameCard';
import Contact from './Contact/Contact';
import About from './About';
import Projects from './Projects/Projects';
import { Colors } from '../../Constants';

// const testBoard: string = '530070000600195000098000060800060003400803001700020006060000280000419005000080079';

interface HomeState {
    projects: Project[];
}

export default class Home extends Component<{}, HomeState> {
    private butterProvider: ButterCmsProvider = new ButterCmsProvider();
    private accentColor: string = Colors.blueDark;
    constructor(props: {}) {
        super(props);
        this.state = {
            projects: []
        };
    }
    public render() {
        const wrapperStyle: React.CSSProperties = {
            backgroundColor: this.accentColor,
        };
        return (
            <div className="wrapper" style={wrapperStyle}>
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
                            <Projects projects={this.state.projects}/>
                        </div>
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

    // private randomBackgroundColor(): string {
    //     if (this.accentColor === '') {
    //         const possible: string[] = [Colors.blueDark, Colors.greenDark];
    //         this.accentColor = possible[Math.floor(Math.random() * possible.length)];
    //     }
    //     return this.accentColor;
    // }
}
