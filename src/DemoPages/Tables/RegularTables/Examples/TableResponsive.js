import React from 'react';
import { Table } from 'reactstrap';

export default class TableResponsive extends React.Component {
  render() {
    return (
      <Table responsive className="mb-0">
        <thead>
          <tr>
            <th>#</th>
            <th>Caller/Dailed</th>
            <th>DID</th>
            <th>Extension</th>
            <th>End Status</th>
            <th>Direction</th>
            
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
                    <td>325468756</td>
                    <td></td>
                    <td>602</td>
                    <td>Transfer</td>
                    <td>IN</td>
            
          </tr>
          <tr>
            <th scope="row">2</th>
                    <td>5246871235</td>
                    <td></td>
                    <td>401</td>
                    <td>No Answer</td>
                    <td>IN</td>
            
          </tr>
          <tr>
            <th scope="row">3</th>
                    <td>0235497885</td>
                    <td></td>
                    <td>989</td>
                    <td></td>
                    <td>IN</td>
            
          </tr>
        </tbody>
      </Table>
    );
  }
}
