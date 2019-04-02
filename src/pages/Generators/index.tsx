import React from 'react';
import { Route, Switch, RouteComponentProps } from 'react-router-dom';
import * as Cache from '../../StorageHelper';
import TypeList from './components/TypeList';
import Generator from './components/Generator';
import Api from '../../api/GeneratorApi';
import * as Types from '../../types/GeneratorTypes';
import Loader from '../../components/Loader';
import './index.css';

const lootStorageKey: string = 'loots';

interface GeneratorsState {
    loot: Types.LootType[];
    loading: boolean;
}

interface GeneratorRouteParams {
    type: string;
}

export default class Generators extends React.PureComponent<
    RouteComponentProps,
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
        // Get loot from local storage
        const lootString = Cache.getString(lootStorageKey);
        if (lootString !== null) {
            this.state = {
                loading: false,
                loot: JSON.parse(lootString)
            };
        }
    }
    public render() {
        return (
            <div className="container">
                <Loader loading={this.state.loading} size={10} color="#222" />
                {!this.state.loading && (
                    <Switch>
                        <Route
                            exact={true}
                            path="/dnd"
                            render={this.typeList}
                        />
                        <Route path="/dnd/:type" render={this.generator} />
                    </Switch>
                )}
            </div>
        );
    }
    public componentDidMount() {
        if (this.state.loot.length === 0) {
            this.api.GetAllLootByType().then(loot => {
                Cache.setString(JSON.stringify(loot), lootStorageKey);
                this.setState({ loot, loading: false });
            });
        }
    }

    private typeList = () => <TypeList types={this.state.loot} />;
    private generator = (props: RouteComponentProps<GeneratorRouteParams>) => {
        const type = this.state.loot.find(
            x => x.name === props.match.params.type
        );
        return <Generator type={type ? type : { items: [], name: '' }} />;
    };
}
