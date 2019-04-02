import React from 'react';
import './LootTypeTile.css';
import * as Types from '../../../types/GeneratorTypes';

interface LootTypeTileProps {
    type: Types.LootType;
}

export default class LootTypeTile extends React.PureComponent<
    LootTypeTileProps
> {
    public render() {
        return (
            <div
                className="lootTypeTile"
                style={{
                    backgroundImage: this.props.type.image
                        ? `url(${this.props.type.image})`
                        : undefined
                }}
            >
                <span className="lootTypeText">{this.props.type.name}</span>
            </div>
        );
    }
}
