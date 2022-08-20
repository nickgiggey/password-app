import React, { Component } from 'react';
import '../css/hostAlgorithm.css';

// -------------------------------------Random Number Generator-------------------------------------- //
class TriggerGenerator extends Component {
    constructor(props) {
        super(props);
        this.state = { shared_var: "init" };
    }
    generateRandomNumber = this.generatedRandomNumber.bind(this);
    componentDidMount() {
        this.generateRandomNumber();
    }
    newRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    generatedRandomNumber() {
        setInterval(() => {
            const rando = this.newRandomNumber(1, 100);
            console.log(rando);
            return rando;
        }, 5000);
    };
    render() {
        return (
            <React.Fragment>
                <></>
            </React.Fragment>
        );
    }
}
class RandoAlgorithm extends Component {
    render() {
        return <React.Fragment>
            <TriggerGenerator />
        </React.Fragment>;
    }
}
export default RandoAlgorithm;