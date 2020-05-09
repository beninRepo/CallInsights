import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search, CSVExport } from 'react-bootstrap-table2-toolkit';
import jsPDF from "jspdf";
import "jspdf-autotable";





export default class LastCalledDailed extends React.Component {

    constructor() {
        super();
        this.state = {
            content: [
                { id: "1", name: "45654121321", direction: "IN" },
                { id: "2", name: "2212156654", direction: "OUT" },
                { id: "3", name: "8774546456", direction: "IN" },
                { id: "2", name: "0021545145", direction: "IN" },
                { id: "3", name: "1245484584", direction: "OUT" },

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
        const headers = [["ID", "NAME", "DIRECTION"]];

        const data = this.state.content.map(elt => [elt.id, elt.name, elt.direction]);

        let content = {
            startY: 50,
            head: headers,
            body: data
        };

        doc.text(title, marginLeft, 40);
        doc.autoTable(content);
        doc.save("LastCalledDailed.pdf")
    }
    render() {
        const headerSortingStyle = { backgroundColor: '#c8e6c9' };
        const { SearchBar, ClearSearchButton } = Search;
        const { ExportCSVButton } = CSVExport;
        const status = {
            'IN': {
                color: Color.green,
            },
            'OUT': {
                color: Color.red,
            },
            
        }

        const columns = [{
           
            dataField: 'id',
            text: '#',
            sort: true,
            headerSortingStyle
        }, {
            dataField: 'name',
            text: 'Number',
            sort: true,
            headerSortingStyle
        }, {
            dataField: 'direction',
                
                text: 'Direction',
            sort: true,
            headerSortingStyle,
              
    
            }];

        const content = [{
            id: '1',
            name: '9854649846',
            direction: 'IN'
        }, {
            id: '2',
            name: '12132165612',
            direction: 'OUT'
        }, {
            id: '3',
            name: '00121845884',
            direction: 'IN'
        }, {
            id: '4',
            name: '7745464849',
            direction: 'IN'
        }, {
            id: '5',
            name: '33256554985',
            direction: 'OUT'
        }];

        return (

            <ToolkitProvider
                keyField="id"
                data={content}
                columns={columns}
                search
                exportCSV={{
                    fileName: 'LastCalledDailed.csv'
                   
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
