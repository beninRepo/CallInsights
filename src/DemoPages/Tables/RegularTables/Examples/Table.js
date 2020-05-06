import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search, CSVExport } from 'react-bootstrap-table2-toolkit';
import jsPDF from "jspdf";
import "jspdf-autotable";



export default class TableExample extends React.Component {

    constructor() {
        super();
        this.state = {
            content: [
                { id: "1", name: "item1", price: "200" },
                { id: "2", name: "item2", price: "300" },
                { id: "3", name: "item3", price: "400" },

            ]
        }
    }


    exportPDF = () => {
        const unit = "pt";
        const size = "A4"; // Use A1, A2, A3 or A4
        const orientation = "portrait"; // portrait or landscape

        const marginLeft = 40;
        const doc = new jsPDF(orientation, unit, size);

        doc.setFontSize(15);

        const title = "Call Report";
        const headers = [["ID", "NAME", "PRICE"]];

        const data = this.state.content.map(elt => [elt.id, elt.name, elt.price]);

        let content = {
            startY: 50,
            head: headers,
            body: data
        };

        doc.text(title, marginLeft, 40);
        doc.autoTable(content);
        doc.save("report.pdf")
    }
    render() {
        const { SearchBar, ClearSearchButton } = Search;
        const { ExportCSVButton } = CSVExport;
        const columns = [{
            dataField: 'id',
            text: 'Product ID'
        }, {
            dataField: 'name',
            text: 'Product Name'
        }, {
            dataField: 'price',
            text: 'Product Price'
        }];

        const products = [{
            id: '1',
            name: 'item1',
            price: '200'
        }, {
            id: '2',
            name: 'item2',
            price: '300'
        }, {
            id: '3',
            name: 'item3',
            price: '400'
        }];

        return (

            <ToolkitProvider
                keyField="id"
                data={products}
                columns={columns}
                search
            >
                {
                    props => (
                        <div>

                            <SearchBar {...props.searchProps} />
                            <ClearSearchButton {...props.searchProps} />
                            <ExportCSVButton {...props.csvProps}><button type='button' id='PopoverC-2' className='mr-2 mb-2 btn btn-success'> Export CSV</button></ExportCSVButton>
                            <button className='mb-2 mr-2 btn-hover-shine btn btn-warning' onClick={() => this.exportPDF()}>Generate PDF</button>
                            <hr />
                            <BootstrapTable
                                {...props.baseProps}
                            />

                        </div>

                    )

                }

            </ToolkitProvider>


        );
    }
}
