import React from 'react';
import { Link } from 'react-router-dom';
import Fader from '../../../components/Fader';
import LootTypeTile from './LootTypeTile';
import * as Types from '../types';

interface TypeListProps {
    types: Types.LootType[];
}

export default class TypeList extends React.PureComponent<TypeListProps> {
    public render() {
        return (
            <div>
                <h1>Generators</h1>
                <div id="lootTiles">{this.renderLootTypes()}</div>
            </div>
        );
    }

    private renderLootTypes(): JSX.Element[] {
        const types: JSX.Element[] = [];
        this.props.types.forEach((type, index) => {
            const typeEl = (
                <Fader
                    key={type.name}
                    index={index}
                    total={this.props.types.length}
                >
                    <Link to={`/dnd/${type.name}`}>
                        <LootTypeTile type={type} />
                    </Link>
                </Fader>
            );
            types.push(typeEl);
        });
        return types;
    }
}
