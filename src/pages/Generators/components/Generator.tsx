import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import LootItem from './LootItem';
import * as Types from '../types';

type GeneratorProps = RouteComponentProps & {
    type: Types.LootType;
};

class Generator extends React.PureComponent<GeneratorProps> {
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

export default withRouter(Generator);
