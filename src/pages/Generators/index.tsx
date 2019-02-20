import React from 'react';
import LootItem from './components/LootItem';
import LootTypeTile from './components/LootTypeTile';
import Api from './api';
import * as Types from './types';
import Loader from '../../components/Loader';
import Fader from '../../components/Fader';

interface GeneratorsState {
    loot: Types.LootType[];
    loading: boolean;
}

export default class Generators extends React.PureComponent<
    {},
    GeneratorsState
> {
    private api: Api;
    constructor(props: any) {
        super(props);
        this.api = new Api();
        this.state = {
            loading: true,
            loot: []
        };
    }
    public render() {
        return (
            <div>
                <h1>Generators</h1>
                <Loader loading={this.state.loading} size={10} color="#222" />
                {this.renderLootTypes()}
            </div>
        );
    }
    public componentDidMount() {
        this.api.GetAllLootByType().then(loot => {
            this.setState({ loot, loading: false });
        });
    }
    private renderLootTypes(): JSX.Element[] {
        const types: JSX.Element[] = [];
        this.state.loot.forEach((type, index) => {
            const typeEl = (
                <Fader
                    key={type.name}
                    index={index}
                    total={this.state.loot.length}
                >
                    <LootTypeTile type={type.name} />
                </Fader>
            );
            types.push(typeEl);
        });
        return types;
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
