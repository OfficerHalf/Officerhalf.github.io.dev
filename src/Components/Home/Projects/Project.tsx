import React, { Component } from 'react';
import { Project } from '../../../Models/Project';
// import { Measures } from '../../../Constants';
import Expander from '../../Expander/Expander';

interface AProjectProps {
    project: Project;
    expandCallback?: (project: AProject) => void;
}

interface AProjectState {
    expanded: boolean;
}

// const iconStyle: React.CSSProperties = {
//     maxHeight: '25px',
//     maxWidth: '25px'
// };

// const projectStyle: React.CSSProperties = {
// };

export default class AProject extends Component<AProjectProps, AProjectState> {
    constructor(props: AProjectProps) {
        super(props);
        this.state = {
            expanded: false
        };
    }
    public render() {
        return (
            <li>
                <span>{this.props.project.name} - {this.props.project.tagline}</span><span onClick={this.clicked}>+</span>
                <Expander expanded={this.state.expanded}>
                    <div dangerouslySetInnerHTML={{__html: this.props.project.description}}/>
                </Expander>
            </li>
        );
    }

    public collapse() {
        console.log("collapsing");
        this.setState({expanded: false});
    }

    private clicked = () => {
        const expanded: boolean = !this.state.expanded;
        this.setState({expanded});
        if (expanded && this.props.expandCallback) {
            this.props.expandCallback(this);
        }
    }
}
