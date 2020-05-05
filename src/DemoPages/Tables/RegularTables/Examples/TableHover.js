import React from 'react';
import { Table } from 'reactstrap';

export default class TableHover extends React.Component {
  render() {
    return (
      <Table hover className="mb-0">
        <thead>
          <tr>
            <th>#</th>
            <th>Number</th>
            <th>Count</th>
          
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>02457854</td>
            <td>15</td>
            
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>011245878</td>
            <td>10</td>
           
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>9784521548</td>
            <td>4</td>
           
          </tr>
        </tbody>
      </Table>
    );
  }
}
