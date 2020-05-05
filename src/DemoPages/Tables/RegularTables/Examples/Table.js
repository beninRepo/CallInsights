import React from 'react';
import { Table } from 'reactstrap';

export default class TableExample extends React.Component {
  render() {
    return (
      <Table className="mb-0">
        <thead>
          <tr>
            <th>#</th>
            <th>Extension</th>
            <th>Count</th>
            </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
             <td>524</td>
            <td>602</td>
            
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>402</td>
           <td>401</td>
           
          </tr>
          <tr>
            <th scope="row">3</th>
             <td>811</td>
            
            <td>989</td>
          
          </tr>
        </tbody>
      </Table>
    );
  }
}
