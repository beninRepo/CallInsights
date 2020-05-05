import React from 'react';
import { Table } from 'reactstrap';

export default class TableSizing extends React.Component {
  render() {
    return (
      <Table size="sm" className="mb-0">
        <thead>
          <tr>
            <th>#</th>
            <th>Department Name</th>
            <th>Count</th>
            </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Others</td>
            <td>22</td>
            
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>DEP</td>
            <td>48</td>
            
          </tr>
    
        </tbody>
      </Table>
    );
  }
}
