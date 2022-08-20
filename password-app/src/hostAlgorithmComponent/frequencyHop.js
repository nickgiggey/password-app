import React, { Component } from 'react';
import '../css/frequencyHop.css'

class FrequencyHop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rando1: 1,
            rando2: 1,
            sum: 0
        };
    }
    GenerateRandomNumber = () => {
        const Frequency1 = Math.floor(Math.random() * Math.PI * 8) + 4;
        const Frequency2 = Math.floor(Math.random() * Math.PI * 8) + 4;
        const sumHost = Frequency1 + Frequency2;
        const sumUser = Frequency1 + Frequency2;
        console.log(sumHost, sumUser);
        this.setState({
            rando1: Frequency1,
            rando2: Frequency2,
            sumHost,
            sumUser
        });
    };
    render() {
        return (
            <section className="algorithm-results">
                <p className="algorithm-results-1">F1: {this.state.rando1}</p>
                <p className="algorithm-results-2">F2: {this.state.rando2}</p>
                <p className="algorithm-results-3">User F = {this.state.sumUser}</p>
                <p className="algorithm-results-4">Host F = {this.state.sumHost}</p>
                <button className="generate-frequency" onClick={this.GenerateRandomNumber}>Generate</button>
            </section>
        );
    }
};
export default FrequencyHop;