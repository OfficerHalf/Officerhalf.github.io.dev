import React from 'react';

export enum ExpanderDirection {
    Horizontal = 'max-width',
    Vertical = 'max-height'
}

interface ExpanderProps {
    expanded: boolean;
    speed?: number;
    direction?: ExpanderDirection;
}

interface ExpanderState {
    first: boolean;
}

class Expander extends React.Component<ExpanderProps, ExpanderState> {
    private content: React.RefObject<HTMLDivElement>;
    constructor(props: ExpanderProps) {
        super(props);
        this.content = React.createRef<HTMLDivElement>();
        this.state = {
            first: true
        };
    }

    public componentDidMount() {
        if (this.state.first) {
            this.setState({ first: false });
        }
    }

    public render() {
        return (
            <div ref={this.content} style={this.buildStyle()}>
                {this.props.children}
            </div>
        );
    }

    private buildStyle(): React.CSSProperties {
        const direction = `${
            this.props.direction
                ? this.props.direction
                : ExpanderDirection.Vertical
        }`;
        const speed = `${this.props.speed ? this.props.speed : 0.4}s`;
        const style: React.CSSProperties = {
            overflow: 'hidden',
            transition: `${direction} ${speed}`
        };

        if (this.props.direction === ExpanderDirection.Horizontal) {
            style.maxWidth =
                this.props.expanded && this.content.current
                    ? this.content.current.scrollWidth
                    : this.props.expanded
                    ? 'auto'
                    : 0;
        } else {
            style.maxHeight =
                this.props.expanded && this.content.current
                    ? this.content.current.scrollHeight
                    : this.props.expanded
                    ? 'auto'
                    : 0;
        }
        return style;
    }
}

export default Expander;
