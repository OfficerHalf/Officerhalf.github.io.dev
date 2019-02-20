import React from 'react';

interface LootItemProps {
    name: string;
    description: string;
}

export default class LootItem extends React.PureComponent<LootItemProps> {
    public render() {
        return (
            <div>
                {this.props.name} : {this.props.description}
            </div>
        );
    }
}
