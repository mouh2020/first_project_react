import React, { Component } from 'react'

export default class ComposantClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cpt: 0
        };
    }

    render() {
        return (
            <div>
                <div>ComposantClass</div>
                <button onClick={() => this.setState({ cpt: this.state.cpt + 1 })}>
                    Incrementer
                </button>
                <div>Compteur: {this.state.cpt}</div>
            </div>
        );
    }
}
