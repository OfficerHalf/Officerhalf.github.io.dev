import React, { Component } from 'react';
import './Section.scss';
import Expander from '../../Expander/Expander';

interface SectionProps {
    title: string;
    expandCallback?: (section: Section) => void;
    collapseCallback?: (section: Section) => void;
    startExpanded?: boolean;
}

interface SectionState {
    expanded: boolean;
}

export default class Section extends Component<SectionProps, SectionState> {
    constructor(props: SectionProps) {
        super(props);
        this.state = {
            expanded: this.props.startExpanded ? true : false
        };
    }
    public render() {
        return (
            <div className="SectionComponent">
                <h1 className="title" onClick={this.titleClicked}>{this.props.title}</h1>
                <div className="content">
                    <Expander expanded={this.state.expanded}>
                        {this.props.children}
                    </Expander>
                </div>
            </div>
        );
    }
    
    private titleClicked = () => {
        if (this.state.expanded) {
            this.setState({expanded: false});
        } else {
            this.setState({expanded: true});
        }
    }
}
