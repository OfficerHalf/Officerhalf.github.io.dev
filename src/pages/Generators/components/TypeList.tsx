import React from 'react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import Fader from '../../../components/Fader';
import LootTypeTile from './LootTypeTile';
import * as Types from '../../../types/GeneratorTypes';

type TypeListProps = RouteComponentProps & {
    types: Types.LootType[];
};

class TypeList extends React.PureComponent<TypeListProps> {
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
                    className="lootTile"
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

export default withRouter(TypeList);
