import React, { PureComponent } from 'react';
import html2canvas from "html2canvas";
const pdfConverter = require("jspdf");
import {
    ResponsiveContainer, ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data2 = [
    { name: 'Connected', count: 150 },
    { name: 'Missed', count: 200 },
    

];


export default class StatusCountChart extends React.Component {
    div2PDF = e => {
        const but = e.target;
        let input = window.document.getElementsByClassName("StatusCountChart")[0];

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
            pdf.save("StatusCountChart.pdf");
        });
    };
    render() {
        return (
            <div>
                <div className="StatusCountChart">
                    <div className="widget-chart p-0">
                        <ResponsiveContainer height={179}>
                            <ComposedChart data={data2} >

                                <CartesianGrid stroke="#ffffff" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                
                                <Bar dataKey="count" barSize={35} fill="var(--primary)" />

                            </ComposedChart>

                        </ResponsiveContainer>

                    </div>
                    <hr />
                </div>
                <button className='mb-2 mr-2 btn-hover-shine btn btn-warning' onClick={(e) => this.div2PDF(e)}>Save PDF</button>
            </div>

        );
    }
}
