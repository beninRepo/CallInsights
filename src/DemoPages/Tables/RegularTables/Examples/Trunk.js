import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search, CSVExport } from 'react-bootstrap-table2-toolkit';
import jsPDF from "jspdf";
import "jspdf-autotable";




export default class Trunk extends React.Component {

    constructor() {
        super();
        this.state = {
            content: [
                { id: "1", name: "01", count: "30" },
                { id: "2", name: "02", count: "22" },
                { id: "3", name: "09", count: "11" },
                { id: "2", name: "10", count: "10" },
                { id: "3", name: "15", count: "09" },

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
        const headers = [["ID", "Trunk", "COUNT"]];

        const data = this.state.content.map(elt => [elt.id, elt.name, elt.count]);

        let content = {
            startY: 50,
            head: headers,
            body: data
        };

        doc.text(title, marginLeft, 40);
        doc.autoTable(content);
        doc.save("Top10Trunk.pdf")
    }
    render() {
        const headerSortingStyle = { backgroundColor: '#c8e6c9' };
        const { SearchBar, ClearSearchButton } = Search;
        const { ExportCSVButton } = CSVExport;
        
        
        const columns = [{
            dataField: 'id',
            text: '#',
            sort: true,
            headerSortingStyle
        }, {
            dataField: 'name',
                text: 'Trunk',
             sort: true,
                headerSortingStyle
        }, {
            dataField: 'count',
            text: 'Count',
            sort: true,
            headerSortingStyle
        }];

        const content = [{
            id: '1',
            name: '01',
            count: '30'
        }, {
            id: '2',
            name: '02',
            count: '22'
        }, {
            id: '3',
            name: '09',
            count: '11'
        }, {
            id: '4',
            name: '05',
            count: '10'
        }, {
            id: '5',
            name: '04',
            count: '09'
        }];

        return (

            <ToolkitProvider
                keyField="id"
                data={content}
                columns={columns}
                search
                exportCSV={{
                    fileName: 'Top10Trunk.csv'
                   
                }}
            >
                {
                    props => (
                        <div>

                            <SearchBar {...props.searchProps} />
                            <ClearSearchButton {...props.searchProps} />
                            <ExportCSVButton {...props.csvProps} > <button type='button' id='PopoverC-2' className='mr-2 mb-2 btn btn-success'> Export CSV</button></ExportCSVButton>
                            <button className='mb-2 mr-2 btn-hover-shine btn btn-warning' onClick={() => this.exportPDF()}>Generate PDF</button>
                            <hr />
                            <BootstrapTable bordered={false} keyField='id'
                                {...props.baseProps}
                            />

                        </div>

                    )

                }

            </ToolkitProvider>


        );
    }
}
