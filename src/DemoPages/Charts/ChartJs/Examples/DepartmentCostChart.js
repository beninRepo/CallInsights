import React, { PureComponent } from 'react';
import html2canvas from "html2canvas";
const pdfConverter = require("jspdf");
import {
  ResponsiveContainer, ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data2 = [
    { name: 'DEP',  cost: 5240, count: 1240 },
    { name: 'OM', cost: 4139, count: 3221 },
    { name: 'Others',  cost: 7980, count: 5229 },
    { name: 'SD',  cost: 4390, count: 3200 },
   
];

export default class DepartmentCostChart extends PureComponent {
    div2PDF = e => {
        const but = e.target;
        let input = window.document.getElementsByClassName("divDepartmentCost")[0];

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
            pdf.save("DepartmentCostChart.pdf");
        });
    };
  render() {
      return (
          <div>
              <div className="divDepartmentCost">
        <div className="widget-chart p-0">
            <ResponsiveContainer height={179}>
                <ComposedChart data={data2}>
                    <CartesianGrid stroke="#ffffff" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="count" fill="#f7ffd0" stroke="#85a200" />
                    <Bar dataKey="cost" barSize={16} fill="var(--primary)" />
                    
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
