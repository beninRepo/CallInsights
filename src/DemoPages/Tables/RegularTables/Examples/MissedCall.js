import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search, CSVExport } from 'react-bootstrap-table2-toolkit';
import jsPDF from "jspdf";
import "jspdf-autotable";




export default class MissedCalls extends React.Component {

    constructor() {
        super();
        this.state = {
            content: [
                { id: "1", caller: "465486548", did: " ", extension: "100", endstatus: "",direction:"IN"},
               { id: "2", caller: "6516515", did: " ", extension: "200", endstatus: "",direction:"IN"},
               { id: "3", caller: "2316846", did: " ", extension: "800", endstatus: "",direction:"IN"},
               { id: "4", caller: "848464516", did: " ", extension: "911", endstatus: "",direction:"IN"},
                { id: "5", caller: "32132154", did: " ", extension: "400", endstatus: "", direction: "IN" },

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
        const headers = [["ID", "CALLER", "DID", "EXTENSION", "ENDSTATUS", "DIRECTION"]];

        const data = this.state.content.map(elt => [elt.id, elt.caller, elt.did, elt.extension, elt.endstatus, elt.direction]);

        let content = {
            startY: 50,
            head: headers,
            body: data
        };

        doc.text(title, marginLeft, 40);
        doc.autoTable(content);
        doc.save("MissedCalls.pdf")
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
                dataField: 'caller',
                text: 'Caller',
                sort: true,
                headerSortingStyle
            }, {
                dataField: 'did',
                text: 'DID',
                sort: true,
                headerSortingStyle
            },
            {
                dataField: 'extension',
                text: 'Extension',
                sort: true,
                headerSortingStyle
            },
            {
                dataField: 'endstatus',
                text: 'End status',
                sort: true,
                headerSortingStyle
            },
            {
                dataField: 'direction',
                text: 'Direction',
                sort: true,
                headerSortingStyle
           
        }];

        const calls = [{
            id: '1',
            caller: '132184123',
            did: '',
            extension: '100',
            endstatus: '',
            direction:'IN'
        }, {
                id: '2',
                caller: '9598416312',
                did: '',
                extension: '124',
                endstatus: '',
                direction: 'IN'
        }, {
                id: '3',
                caller: '232198461',
                did: '',
                extension: '911',
                endstatus: '',
                direction: 'IN'
        }, {
                id: '4',
                caller: '321649861',
                did: '',
                extension: '956',
                endstatus: 'Not_Answered',
                direction: 'IN'
        }, {
                id: '5',
                caller: '6548213165',
                did: '',
                extension: '654',
                endstatus: '',
                direction: 'IN'
        }];

        return (

            <ToolkitProvider
                keyField="id"
                data={calls}
                columns={columns}
                search
                exportCSV={{
                    fileName: 'Last10MissedCalls.csv'

                }}
            >
                {
                    props => (
                        <div>

                            <SearchBar {...props.searchProps} />
                            <ClearSearchButton {...props.searchProps} />
                            <ExportCSVButton {...props.csvProps}><button type='button' id='PopoverC-2' className='mr-2 mb-2 btn btn-success'> Export CSV</button></ExportCSVButton>
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
