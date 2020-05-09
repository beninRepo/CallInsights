import React from "react";
import ReactDOM from "react-dom";
import MUIDataTable from "mui-datatables";



export default class CdrReports extends React.Component {
    render() {

        const columns = ["Date/time", "Extn", "Trunk", "Direction", "Status","Caller/Dailed","CallDuration","RingDuration","AED","Tariff"];

        const data = [
            ["11/05/2020", "222", "02", "IN", "Connected", "32395454", "00:00:54", "00:00:00", "2", "Mobile"],
            ["07/10/2020", "707", "07", "IN", "Connected", "96875445", "00:25:54", "00:20:00", "10", "Mobile"],
            ["15/08/2020", "878", "12", "OUT", "Connected", "213216841", "00:12:54", "00:00:00", "2", "Mobile"],
            ["15/12/2020", "633", "14", "IN", "Connected", "98564756", "00:00:04", "00:00:12", "30", "Mobile"],
            ["08/07/2020", "456", "07", "OUT", "Not Answered", "2132151231", "00:00:00", "00:00:00", "0", "Mobile"],
            ["01/01/2020", "123", "09", "IN", "Connected", "32395454", "02:00:54", "00:00:00", "5", "Mobile"],
            ["11/05/2020", "222", "02", "IN", "Connected", "32395454", "00:00:54", "00:00:00", "2", "Mobile"],
            ["07/10/2020", "707", "07", "IN", "Connected", "96875445", "00:25:54", "00:20:00", "10", "Mobile"],
            ["15/08/2020", "878", "12", "OUT", "Connected", "213216841", "00:12:54", "00:00:00", "2", "Mobile"],
            ["15/12/2020", "633", "14", "IN", "Connected", "98564756", "00:00:04", "00:00:12", "30", "Mobile"],
            ["08/07/2020", "456", "07", "OUT", "Not Answered", "2132151231", "00:00:00", "00:00:00", "0", "Mobile"],
            ["01/01/2020", "123", "09", "IN", "Connected", "32395454", "02:00:54", "00:00:00", "5", "Mobile"],
            ["08/07/2020", "456", "07", "OUT", "Not Answered", "2132151231", "00:00:00", "00:00:00", "0", "Mobile"],
            ["01/01/2020", "123", "09", "IN", "Connected", "32395454", "02:00:54", "00:00:00", "5", "Mobile"],
            ["11/05/2020", "222", "02", "IN", "Connected", "32395454", "00:00:54", "00:00:00", "2", "Mobile"],
            ["07/10/2020", "707", "07", "IN", "Connected", "96875445", "00:25:54", "00:20:00", "10", "Mobile"],
            ["15/12/2020", "633", "14", "IN", "Connected", "98564756", "00:00:04", "00:00:12", "30", "Mobile"],
            ["08/07/2020", "456", "07", "OUT", "Not Answered", "2132151231", "00:00:00", "00:00:00", "0", "Mobile"],
            ["01/01/2020", "123", "09", "IN", "Connected", "32395454", "02:00:54", "00:00:00", "5", "Mobile"],
            ["11/05/2020", "222", "02", "IN", "Connected", "32395454", "00:00:54", "00:00:00", "2", "Mobile"],
            ["07/10/2020", "707", "07", "IN", "Connected", "96875445", "00:25:54", "00:20:00", "10", "Mobile"],
            ["15/08/2020", "878", "12", "OUT", "Connected", "213216841", "00:12:54", "00:00:00", "2", "Mobile"],
            ["15/12/2020", "633", "14", "IN", "Connected", "98564756", "00:00:04", "00:00:12", "30", "Mobile"],
            ["08/07/2020", "456", "07", "OUT", "Not Answered", "2132151231", "00:00:00", "00:00:00", "0", "Mobile"]
           
           
        ];

        const options = {
            filterType: "dropdown",
            responsive: "scroll",
            selectableRows: false,
            downloadOptions: { filename: 'CDRreport.csv', separator: ',' }
            
        };




        return (
            <MUIDataTable
                data={data}
                columns={columns}
                options={options}
            />
              
        )
    }
}