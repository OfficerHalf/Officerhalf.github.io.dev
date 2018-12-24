import React, { Component } from 'react';
import classNames from 'classnames';
import './Expander.scss';

interface ExpanderProps {
    label: string;
    expandCallback?: (thisExpander: Expander) => void;
    collapseCallback?: (thisExpander: Expander) => void;
    startExpanded?: boolean;
}

interface ExpanderState {
    expanded: boolean;
    height: number;
}

export default class Expander extends Component<ExpanderProps, ExpanderState> {
    private expanderContent: React.RefObject<HTMLDivElement>;
    constructor(props: ExpanderProps) {
        super(props);
        this.state = {
            expanded: this.props.startExpanded ? this.props.startExpanded : false,
            height: 0
        };
        this.expanderContent = React.createRef();
    }

    public componentDidMount() {
        if (this.props.startExpanded) {
            this.setState({height: this.expanderContent.current!.scrollHeight});
        }
    }

    public render() {
        const contentClasses = classNames('content', {expanded: this.state.expanded});
        const contentStyles: React.CSSProperties = {
            maxHeight: this.state.height
        };
        const iconStyles: React.CSSProperties = {
            transform: `rotate(${this.state.expanded ? 90 : 0}deg)`
        };
        return (
            <div className="ExpanderComponent">
                <span onClick={this.toggleExpander}><h2><span style={iconStyles} className="icon">></span> {this.props.label}</h2></span>
                <div ref={this.expanderContent} className={contentClasses} style={contentStyles}>
                    {this.props.children}
                </div>
            </div>
        );
    }

    public toggleExpander = () => {
        const height: number = this.state.height === 0 ? this.expanderContent.current!.scrollHeight : 0;
        const expanded = !this.state.expanded;
        this.setState({expanded: !this.state.expanded, height});
        if (expanded && this.props.expandCallback) {
            this.props.expandCallback(this);
        } else if (!expanded && this.props.collapseCallback) {
            this.props.collapseCallback(this);
        }
    }

    public collapse() {
        this.setState({expanded: false, height: 0});
    }

    public expand() {
        const height: number = this.expanderContent.current!.scrollHeight;
        this.setState({expanded: true, height});
    }
}
