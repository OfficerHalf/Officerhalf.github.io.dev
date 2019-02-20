import React from 'react';

const DEFAULT_TOTAL = 4;
const DEFAULT_SPEED = 0.8;

interface FaderProps {
    index?: number;
    total?: number;
    speed?: number;
    delay?: number;
    timing?: string;
}

export default class Fader extends React.PureComponent<FaderProps> {
    public render() {
        const total: number = this.props.total
            ? this.props.total
            : DEFAULT_TOTAL;
        const speed: number = this.props.speed
            ? this.props.speed
            : DEFAULT_SPEED;
        const delay: number = this.props.delay
            ? this.props.delay
            : this.props.index
            ? (speed / total) * this.props.index
            : 0;
        const timing: string = this.props.timing
            ? this.props.timing
            : 'ease-out';
        const style: React.CSSProperties = {
            animation: `fade-in ${speed}s ${timing} ${delay}s`,
            animationFillMode: 'both'
        };
        return <div style={style}>{this.props.children}</div>;
    }
}
