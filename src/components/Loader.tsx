import React from 'react';

interface LoaderProps {
    loading: boolean;
    size: number;
    color: string;
}

export default class Loader extends React.PureComponent<LoaderProps> {
    private baseStyle: React.CSSProperties;
    constructor(props: LoaderProps) {
        super(props);
        this.baseStyle = {
            animation: 'fade 1.4s infinite',
            animationFillMode: 'both',
            background: props.color,
            borderRadius: '50%',
            height: props.size,
            width: props.size
        };
    }
    public render() {
        const display: string = this.props.loading ? 'inline-block' : 'none';
        return (
            <div>
                <span
                    style={{
                        ...this.baseStyle,
                        display
                    }}
                />
                <span
                    style={{
                        ...this.baseStyle,
                        animationDelay: '0.2s',
                        display,
                        marginLeft: this.props.size / 2,
                        marginRight: this.props.size / 2
                    }}
                />
                <span
                    style={{
                        ...this.baseStyle,
                        animationDelay: '0.4s',
                        display
                    }}
                />
            </div>
        );
    }
}
