import React from 'react';
import { Doughnut } from 'react-chartjs-2';

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


const getState = () => ({
    labels: [
        'Incoming',
        'Outgoing'
    ],
    datasets: [{
        data: [getRandomInt(50, 200), getRandomInt(100, 150)],
        backgroundColor: [

            '#71deb9',
            '#ef869e'
        ],
        hoverBackgroundColor: [

            '#4dd6a7',
            '#eb6886'
        ]
    }]
});

var createReactClass = require('create-react-class');

export default createReactClass({
    displayName: 'DynamicDoughnutExample',

    getInitialState() {
        return getState();
    },

    componentWillMount() {
        setInterval(() => {
            this.setState(getState());
        }, 5000);
    },

    render() {
        return (
            <div>
                <Doughnut data={this.state} />

            </div>
        );
    }
});