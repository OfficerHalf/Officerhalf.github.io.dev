import React from 'react';

interface LootTypeTileProps {
    type: string;
}

const style: React.CSSProperties = {
    backgroundColor: '#eee',
    height: 200,
    width: 200
};

export default class LootTypeTile extends React.PureComponent<
    LootTypeTileProps
> {
    public render() {
        return <div style={style}>{this.props.type}</div>;
    }
}
