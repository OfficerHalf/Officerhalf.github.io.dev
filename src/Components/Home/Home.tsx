import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import './Home.scss';
import { CellCollection } from '../../Sudoku/Models/CellCollection';
import ButterCmsProvider from '../../Providers/ButterCmsProvider';
import { Project } from '../../Models/Project';
import Section from './Section/Section';
import ContactLink from './ContactLink/ContactLink';

const testBoard: string = '530070000600195000098000060800060003400803001700020006060000280000419005000080079';

interface HomeState {
    projects: Project[];
}

export default class Home extends Component<{}, HomeState> {
    private butterProvider: ButterCmsProvider = new ButterCmsProvider();
    private sections: Array<React.RefObject<Section>>;
    constructor(props: {}) {
        super(props);
        this.state = {
            projects: []
        };
        this.sections = [];
        this.sections.push(React.createRef());
        this.sections.push(React.createRef());
        this.sections.push(React.createRef());
    }
    public render() {
        const collection = new CellCollection(testBoard, 9);
        console.log(collection);
        return (
            <div className="HomeComponent">
                <Navbar/>
                <div className="sections">
                    <Section title="about" ref={this.sections[0]} startExpanded>
                        <p>
                            I am an Associate Software Developer at Bentley Systems, having graduated from Mississippi State Univeristy with my Bachelors degree in Software Engineering in 2016 and my Masters degree in Computer Science in 2017.
                        </p>
                        <p>
                            I have a passion for open source software, music, and video games.
                        </p>
                    </Section>
                    <Section title="projects" ref={this.sections[1]} expandCallback={this.projectsExpanded}>
                        Projects section
                    </Section>
                    <Section title="contact" ref={this.sections[2]}>
                        <p>
                            I can be reached at <a href="mailto:nathan@nathan-smith.org">nathan@nathan-smith.org</a> or on these platforms.
                        </p>
                        <div className="contactLinks">
                            <ul>
                                <ContactLink>
                                    <a href="https://www.linkedin.com/in/nathan-r-smith/">LinkedIn</a>
                                </ContactLink>
                                <ContactLink>
                                    <a href="https://github.com/OfficerHalf">GitHub</a>
                                </ContactLink>
                            </ul>
                        </div>
                    </Section>
                </div>
            </div>
        );
    }

    public componentDidMount(): void {
        this.butterProvider.getProjects().then(projects => {
            this.setState({projects});
        });
    }

    private projectsExpanded = (section: Section) => {
        this.sections.forEach(s => {
            if (s.current && s.current !== section) {
                s.current!.collapse();
            }
        });
    }
}
