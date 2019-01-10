import React, { Component } from 'react';

interface PlusMinusProps {
    minus: boolean;
    size: number;
    color: string;
}

export default class PlusMinus extends Component<PlusMinusProps, {}> {
    public render() {
        const mainStyle: React.CSSProperties = {
            display: 'inline-block',
            height: this.props.size,
            minHeight: this.props.size,
            minWidth: this.props.size,
            position: 'relative',
            width: this.props.size
        };
        const beforeStyle: React.CSSProperties = {
            backgroundColor: this.props.color,
            content: '',
            height: '100%',
            left: '50%',
            marginLeft: '-1px',
            position: 'absolute',
            top: 0,
            transform: this.props.minus ? 'rotate(90deg)' : undefined,
            transition: 'transform 0.25s ease-out',
            width: '2px'
        };
        const afterStyle: React.CSSProperties = {
            backgroundColor: this.props.color,
            content: '',
            height: '2px',
            left: 0,
            marginTop: '-1px',
            position: 'absolute',
            top: '50%',
            transform: this.props.minus ? 'rotate(180deg)' : undefined,
            transition: 'transform 0.25s ease-out',
            width: '100%'
        };
        return (
            <div style={mainStyle}>
                <span style={beforeStyle}/>
                <span style={afterStyle}/>
            </div>
        );
    }
}
