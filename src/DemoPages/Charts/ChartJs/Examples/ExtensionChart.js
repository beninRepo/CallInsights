import React, { PureComponent } from 'react';
import {
    ResponsiveContainer, ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data2 = [
    { name: '100', cost: 240, count: 150 },
    { name: '104', cost: 320, count: 200 },
    { name: '203', cost: 100, count: 88 },
    { name: '201', cost: 500, count: 300 },
    { name: '110', cost: 422, count: 280 },
    { name: '128', cost: 80, count: 29 },
    { name: '114', cost: 20, count: 12 },

];

export default class ExtensionChart extends PureComponent {

    render() {
        return (
            <div className="widget-chart p-0">
                <ResponsiveContainer height={179}>
                    <ComposedChart data={data2}>
                        <CartesianGrid stroke="#ffffff" />
                        <XAxis dataKey="name" />
                        <YAxis  />
                        <Tooltip />
                        <Area type="monotone" dataKey="count" fill="#f7ffd0" stroke="#85a200" />
                        <Bar dataKey="cost" barSize={16} fill="var(--primary)" />

                    </ComposedChart>
                </ResponsiveContainer>

            </div>
        );
    }
}
