import React, { Component } from 'react';
import classNames from 'classnames';
import './Expander.scss';

interface ExpanderProps {
    expanded: boolean;
}

export default class Expander extends Component<ExpanderProps, {}> {
    private expanderContent: React.RefObject<HTMLDivElement>;
    constructor(props: ExpanderProps) {
        super(props);
        this.expanderContent = React.createRef();
    }

    public render() {
        const contentClasses = classNames('ExpanderComponent', 'content', {expanded: this.props.expanded});
        const contentStyles: React.CSSProperties = {
            maxHeight: this.props.expanded && this.expanderContent.current ? this.expanderContent.current.scrollHeight : 0
        };

        return (
            <div className={contentClasses} ref={this.expanderContent} style={contentStyles}>
                {this.props.children}
            </div>
        );
    }
}
