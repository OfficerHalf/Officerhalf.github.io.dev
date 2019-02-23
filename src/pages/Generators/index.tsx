import React from 'react';
import { Route, Switch, RouteComponentProps } from 'react-router-dom';
import LootItem from './components/LootItem';
import TypeList from './components/TypeList';
import Generator from './components/Generator';
import Api from './api';
import * as Types from './types';
import Loader from '../../components/Loader';
import './index.css';

interface GeneratorsState {
    loot: Types.LootType[];
    loading: boolean;
}

interface GeneratorRouteParams {
    type: string;
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
        this.api.GetAllLootByType().then(loot => {
            this.setState({ loot, loading: false });
        });
    }

    private typeList = () => <TypeList types={this.state.loot} />;
    private generator = (props: RouteComponentProps<GeneratorRouteParams>) => {
        const type = this.state.loot.find(
            x => x.name === props.match.params.type
        );
        return <Generator type={type ? type : { items: [], name: '' }} />;
    };
}
