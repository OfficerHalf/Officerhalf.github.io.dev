import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import LootItem from './LootItem';
import * as Types from '../../../types/GeneratorTypes';

type GeneratorProps = RouteComponentProps & {
    type: Types.LootType;
};

interface GeneratorState {
    remaining: Types.Loot[];
    item: Types.Loot;
    unique: boolean;
}

class Generator extends React.PureComponent<GeneratorProps, GeneratorState> {
    constructor(props: GeneratorProps) {
        super(props);
        this.state = {
            remaining: props.type.items,
            item: {
                description: '',
                item: '',
                value: ''
            },
            unique: true
        };
    }
    public render() {
        return (
            <div>
                <h2>{this.props.type.name}</h2>
                <div>Remaining: {this.state.remaining.length}</div>
                <div>Random: {this.state.item.item}</div>
                <div>
                    <button onClick={this.pickOne}>Pick One</button>
                    <input
                        type="checkbox"
                        onChange={this.setUnique}
                        checked={this.state.unique}
                    />
                </div>
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

    private setUnique = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ unique: event.target.checked });
    };

    private pickOne = () => {
        const newRemaining =
            this.state.remaining.length > 0 && this.state.unique
                ? [...this.state.remaining]
                : [...this.props.type.items];
        const index = Math.floor(Math.random() * newRemaining.length);
        const item = newRemaining[index];
        newRemaining.splice(index, 1);
        this.setState({ remaining: newRemaining, item });
    };
}

export default withRouter(Generator);
