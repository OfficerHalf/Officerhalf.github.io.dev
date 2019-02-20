import React from 'react';
import axios from 'axios';
import LootItem from './components/LootItem';

const api = axios.create({
    baseURL: 'https://api.buttercms.com/v2/content/',
    params: {
        auth_token: '9ffd3dad4fd54423ad22bc3ce3e1a2fd6bbc9081'
    }
});

interface GeneratorsState {
    items: any[];
}

export default class Generators extends React.PureComponent<
    {},
    GeneratorsState
> {
    constructor(props: any) {
        super(props);
        this.state = {
            items: []
        };
    }
    public render() {
        return (
            <div>
                <h1>Generators</h1>
                <ul>
                    {this.state.items.map((item, index) => (
                        <LootItem
                            name={item.item}
                            description={item.description}
                            key={index}
                        />
                    ))}
                </ul>
            </div>
        );
    }
    public componentDidMount() {
        api.get('', {
            params: {
                keys: 'loot_types[name=Evil Mage]'
            }
        }).then(resp => {
            console.log(resp);
            this.setState({ items: resp.data.data.loot_types[0].items });
        });
    }
}
