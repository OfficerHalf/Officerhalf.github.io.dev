import React, { Component } from 'react';
import './Section.scss';
import Expander from '../../Expander/Expander';
import classNames from 'classnames';

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
    private first: boolean = true;
    constructor(props: SectionProps) {
        super(props);
        this.state = {
            expanded: false
        };
    }

    public componentDidMount() {
        if (this.first && this.props.startExpanded) {
            this.setState({expanded: true});
        }
        this.first = false;
    }

    public render() {
        const titleClasses = classNames('title', {expanded: this.state.expanded});
        return (
            <div className="SectionComponent">
                <h1 className={titleClasses} onClick={this.titleClicked}>{this.props.title}</h1>
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
            if (this.props.expandCallback) {
                this.props.expandCallback(this);
            }
        } else {
            this.setState({expanded: true});
            if (this.props.collapseCallback) {
                this.props.collapseCallback(this);
            }
        }
    }

    public expand() {
        this.setState({expanded: true});
    }

    public collapse() {
        this.setState({expanded: false});
    }
}
