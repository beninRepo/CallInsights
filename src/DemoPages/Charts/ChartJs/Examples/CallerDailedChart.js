import React from 'react';
import { LineChart } from 'recharts'
import html2canvas from "html2canvas";
const pdfConverter = require("jspdf");
import {
    ResponsiveContainer, ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
    { name: '875454847', count: 120},
    { name: '32324548', count: 90},
    { name: '8985627878', count: 200},
    { name: '978458788', count: 150 },
  
    ];


export default class CallerDailedChart extends React.Component {
    div2PDF = e => {
        const but = e.target;
        let input = window.document.getElementsByClassName("CallerDailed")[0];

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
            pdf.save("CallerDailed.pdf");
        });
    };
    render() {
        return (
            <div>
                <div className="CallerDailed">
                    <div className="widget-chart p-0">
                        <ResponsiveContainer height={179}>

                            <LineChart data={data}
                                >
                                <XAxis dataKey="name" />
                                <YAxis/>
                                <Tooltip />
                                <Line type='monotone' dataKey='count' stroke='#3ac47d'
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
