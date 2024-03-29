import React, { PureComponent } from 'react';
import html2canvas from "html2canvas";
const pdfConverter = require("jspdf");
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


export default class ExtensionChart extends React.Component {
    div2PDF = e => {
        const but = e.target;
        let input = window.document.getElementsByClassName("extensionChart")[0];

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
            pdf.save("Extensionchart.pdf");
            });
    };
    render() {
        return (
            <div>
            <div className="extensionChart">
            <div className="widget-chart p-0">               
                <ResponsiveContainer height={179}>
                    <ComposedChart data={data2} >
                        
                        <CartesianGrid stroke="#ffffff" />
                        <XAxis dataKey="name" />
                        <YAxis  />
                        <Tooltip />
                        <Area type="monotone" dataKey="count" fill="#f7ffd0" stroke="#85a200" />
                        <Bar dataKey="cost" barSize={16} fill="var(--primary)" />

                    </ComposedChart>                 

                </ResponsiveContainer>

                    </div>
                    <hr/>
            </div>           
                <button className='mb-2 mr-2 btn-hover-shine btn btn-warning' onClick={(e) => this.div2PDF(e)}>Save PDF</button>
            </div>
          
        );
    }
}
