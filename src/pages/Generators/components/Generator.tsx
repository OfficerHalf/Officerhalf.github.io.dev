import React from 'react';
import LootItem from './LootItem';
import * as Types from '../types';

interface GeneratorProps {
    type: Types.LootType;
}

export default class Generator extends React.PureComponent<GeneratorProps> {
    public render() {
        return (
            <div>
                <h2>{this.props.type.name}</h2>
                {this.renderLootList(this.props.type.items)}
            </div>
        );
    }

    private renderLootList(lootItems: Types.Loot[]): JSX.Element[] {
        const loot: JSX.Element[] = [];
        lootItems.forEach(lootItem => {
            loot.push(
                <LootItem
                    name={lootItem.item}
                    description={lootItem.description}
                    key={lootItem.item}
                />
            );
        });
        return loot;
    }
}
