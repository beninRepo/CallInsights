import React from 'react';
import { LineChart } from 'recharts'
import html2canvas from "html2canvas";
const pdfConverter = require("jspdf");
import {
    ResponsiveContainer, ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
    { name: 'Jan', cost: 2400},
    { name: 'Feb', cost: 1398},
    { name: 'Mar', cost: 9800},
    { name: 'Apr', cost: 3908},
    { name: 'May', cost: 4800},
    { name: 'Jun', cost: 3800},
    { name: 'Jul', cost: 4300},
    { name: 'Aug', cost: 6800},
    { name: 'Sep', cost: 7908},
    { name: 'Oct', cost: 9800},
    { name: 'Nov', cost: 3800},
    { name: 'Dec', cost: 4300},
];


export default class CostChart extends React.Component {
    div2PDF = e => {
        const but = e.target;
        let input = window.document.getElementsByClassName("CostChart")[0];

        html2canvas(input).then(canvas => {
            const img = canvas.toDataURL("image/png");
            const pdf = new pdfConverter("l", "pt");
            pdf.addImage(
                img,
                "png",
                input.offsetLeft,
                input.offsetTop,
                input.clientWidth,
                input.clientHeight
            );
            pdf.save("CostChart.pdf");
        });
    };
    render() {
        return (
            <div>
                <div className="CostChart">
                    <div className="widget-chart p-0">
                        <ResponsiveContainer height={100}>

                            <LineChart data={data}
                                margin={{ top: 5, right: 5, left: 5, bottom: 0 }}>
                                <XAxis dataKey="name" />
                               
                                <Tooltip />
                                <Line type='monotone' dataKey='cost' stroke='#3ac47d'
                                    strokeWidth={3} />
                            </LineChart>
                           

                                
                        </ResponsiveContainer>

                    </div>
                    <hr />
                </div>
                <button className='mb-2 mr-2 btn-hover-shine btn btn-warning' onClick={(e) => this.div2PDF(e)}>Save PDF</button>
            </div>

        );
    }
}
