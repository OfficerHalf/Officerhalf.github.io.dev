import React from 'react';
import Expander, { ExpanderDirection } from '../../components/Expander';

interface HomeState {
    toggle: boolean;
}

export default class Home extends React.PureComponent<{}, HomeState> {
    constructor(props: any) {
        super(props);
        this.state = {
            toggle: true
        };
    }
    public render() {
        return (
            <div>
                <button onClick={this.toggle}>Toggle</button>
                <Expander
                    expanded={this.state.toggle}
                    direction={ExpanderDirection.Vertical}
                >
                    <div>Some more content</div>
                </Expander>
            </div>
        );
    }
    private toggle = () => {
        this.setState({
            toggle: !this.state.toggle
        });
    };
}
