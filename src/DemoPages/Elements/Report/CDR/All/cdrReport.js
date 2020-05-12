import React from "react";
import ReactDOM from "react-dom";
import MaterialTable from 'material-table';



export default class CdrReports extends React.Component {
    render() {
        const columns = [
            { title: "Date/time", field: "cdatetime", type: 'date', filtering: false },
            { title: "Extn", field: "extn" },
            { title: "Trunk", field: "trunk" },
            { title: "Direction", field: "direction" },
            { title: "Status", field: "status" },
            { title: "Caller/Dailed", field: "caller" },
            { title: "CallDuration", field: "calldur" },
            { title: "RingDuration", field: "ringdur" },
            { title: "AED", field: "aed" },
            { title: "Tariff", field: "tarrif" },
            { title: "TariffName", field: "tarrifname" },
            { title: "TariffType", field: "tarriftype" }
        ];

        const data = [
            { cdatetime: '26/11/2020', extn: '222', trunk: '02', direction: 'IN', status: 'Connected', caller: '32395454', calldur: '00:00:54', ringdur: '00:00:00', aed: '2', tarrif: 'Mobile', tarrifname: 'Mobile', tarriftype:'Transfer' },
            { cdatetime: '21/08/2020', extn: '707', trunk: '07', direction: 'IN', status: 'Connected', caller: '96875445', calldur: '00:25:54', ringdur: '00:20:00', aed: '10', tarrif: 'Mobile', tarrifname: '', tarriftype: 'Transfer'  },
            { cdatetime: '15/08/2020', extn: '878', trunk: '12', direction: 'OUT', status: 'Connected', caller: '213216841', calldur: '00:12:54', ringdur: '00:00:00', aed: '2', tarrif: 'Mobile', tarrifname: 'Mobile', tarriftype: 'Transfer'  },
            { cdatetime: '15/11/2020', extn: '633', trunk: '14', direction: 'IN', status: 'Connected', caller: '98564756', calldur: '00:00:04', ringdur: '00:00:12', aed: '30', tarrif: 'Mobile', tarrifname: '', tarriftype: 'Transfer'  },
            { cdatetime: '13/07/2020', extn: '456', trunk: '07', direction: 'OUT', status: 'Not Answered', caller: '2132151231', calldur: '00:00:00', ringdur: '00:00:00', aed: '0', tarrif: 'Mobile', tarrifname: 'Mobile', tarriftype: 'Transfer'  },
            { cdatetime: '22/01/2020', extn: '123', trunk: '09', direction: 'IN', status: 'Connected', caller: '32395454', calldur: '02:00:54', ringdur: '00:00:00', aed: '5', tarrif: 'Mobile'  ,tarrifname: 'Mobile', tarriftype: 'Transfer' },
            { cdatetime: '16/5/2020', extn: '222', trunk: '02', direction: 'IN', status: 'Connected', caller: '32395454', calldur: '00:00:54', ringdur: '00:00:00', aed: '2', tarrif: 'Mobile'  ,tarrifname: 'Mobile', tarriftype: 'Transfer' },
            { cdatetime: '17/10/2020', extn: '707', trunk: '07', direction: 'IN', status: 'Connected', caller: '96875445', calldur: '00:25:54', ringdur: '00:20:00', aed: '10', tarrif: 'Mobile' , tarrifname: '', tarriftype: 'Transfer' },
            { cdatetime: '15/08/2020', extn: '878', trunk: '12', direction: 'OUT', status: 'Connected', caller: '213216841', calldur: '00:12:54', ringdur: '00:00:00', aed: '2', tarrif: 'Mobile',  tarrifname: 'Mobile', tarriftype: 'Transfer' },
            { cdatetime: '15/11/2020', extn: '633', trunk: '14', direction: 'IN', status: 'Connected', caller: '98564756', calldur: '00:00:04', ringdur: '00:00:12', aed: '30', tarrif: 'Mobile' , tarrifname: 'Mobile', tarriftype: 'Transfer' },
            { cdatetime: '28/07/2020', extn: '456', trunk: '07', direction: 'OUT', status: 'Not Answered', caller: '2132151231', calldur: '00:00:00', ringdur: '00:00:00', aed: '0', tarrif: 'Mobile',  tarrifname: 'Mobile', tarriftype: 'Transfer' },
            { cdatetime: '28/07/2020', extn: '456', trunk: '07', direction: 'IN', status: 'Not Answered', caller: '2132151231', calldur: '00:00:00', ringdur: '00:00:00', aed: '0', tarrif: 'Mobile',  tarrifname: '', tarriftype: 'Transfer' },
            { cdatetime: '18/01/2020', extn: '123', trunk: '09', direction: 'IN', status: 'Connected', caller: '32395454', calldur: '02:00:54', ringdur: '00:00:00', aed: '5', tarrif: 'Mobile' , tarrifname: '', tarriftype: 'Transfer' },
            { cdatetime: '18/07/2020', extn: '456', trunk: '07', direction: 'OUT', status: 'Not Answered', caller: '2132151231', calldur: '00:00:00', ringdur: '00:00:00', aed: '0', tarrif: 'Mobile',  tarrifname: 'Mobile', tarriftype: 'Transfer' },
            { cdatetime: '19/01/2020', extn: '123', trunk: '09', direction: 'IN', status: 'Connected', caller: '32395454', calldur: '02:00:54', ringdur: '00:00:00', aed: '5', tarrif: 'Mobile' , tarrifname: '', tarriftype: 'Transfer' },
            { cdatetime: '21/05/2020', extn: '222', trunk: '02', direction: 'IN', status: 'Connected', caller: '32395454', calldur: '00:00:54', ringdur: '00:00:00', aed: '2', tarrif: 'Mobile' , tarrifname: 'Mobile', tarriftype: 'Transfer' },
            { cdatetime: '17/10/2020', extn: '707', trunk: '07', direction: 'IN', status: 'Connected', caller: '96875445', calldur: '00:25:54', ringdur: '00:20:00', aed: '10', tarrif: 'Mobile' , tarrifname: '', tarriftype: 'Transfer' },
            { cdatetime: '24/11/2020', extn: '633', trunk: '14', direction: 'IN', status: 'Connected', caller: '98564756', calldur: '00:00:04', ringdur: '00:00:12', aed: '30', tarrif: 'Mobile'  ,tarrifname: 'Mobile', tarriftype: 'Transfer' },
            { cdatetime: '18/07/2020', extn: '456', trunk: '07', direction: 'OUT', status: 'Not Answered', caller: '2132151231', calldur: '00:00:00', ringdur: '00:00:00', aed: '0', tarrif: 'Mobile' , tarrifname: '', tarriftype: 'Transfer' },
            { cdatetime: '21/01/2020', extn: '123', trunk: '09', direction: 'IN', status: 'Connected', caller: '32395454', calldur: '02:00:54', ringdur: '00:00:00', aed: '5', tarrif: 'Mobile'  ,tarrifname: 'Mobile', tarriftype: 'Transfer' },
            { cdatetime: '30/05/2020', extn: '222', trunk: '02', direction: 'IN', status: 'Connected', caller: '32395454', calldur: '00:00:54', ringdur: '00:00:00', aed: '2', tarrif: 'Mobile'  ,tarrifname: '', tarriftype: 'Transfer' },
            { cdatetime: '17/10/2020', extn: '707', trunk: '07', direction: 'IN', status: 'Connected', caller: '96875445', calldur: '00:25:54', ringdur: '00:20:00', aed: '10', tarrif: 'Mobile' , tarrifname: 'Mobile', tarriftype: 'Transfer' },
            { cdatetime: '15/08/2020', extn: '878', trunk: '12', direction: 'OUT', status: 'Connected', caller: '213216841', calldur: '00:12:54', ringdur: '00:00:00', aed: '2', tarrif: 'Mobile',  tarrifname: 'Mobile', tarriftype: 'Transfer' },
            { cdatetime: '15/11/2020', extn: '633', trunk: '14', direction: 'IN', status: 'Connected', caller: '98564756', calldur: '00:00:04', ringdur: '00:00:12', aed: '30', tarrif: 'Mobile' , tarrifname: '', tarriftype: 'Transfer' },
            { cdatetime: '28/07/2020', extn: '456', trunk: '07', direction: 'OUT', status: 'Not Answered', caller: '2132151231', calldur: '00:00:00', ringdur: '00:00:00', aed: '0', tarrif: 'Mobile',  tarrifname: 'Mobile', tarriftype: 'Transfer' },


        ];





        const options = {
            filterType: "dropdown",
            doubleHorizontalScroll:true,
            grouping: true,
            search: true,
            draggable: true,
            filtering: true,
            exportButton: true,
            exportAllData: true


        };




        return (

            <MaterialTable 
                title={"CDR Report"}
                data={data}
                columns={columns}
                options={options}
            />

        )
    }
}