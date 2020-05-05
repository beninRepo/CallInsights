import React from 'react';
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';
const divStyle = {
    overflowY: 'scroll',
    height: '255px',
    position: 'relative'
    
};
export default class ListGroupBadge extends React.Component {
  render() {
      return (
          <div style={divStyle}>
      <ListGroup>
        <ListGroupItem className="justify-content-between">Others <Badge pill>38</Badge> </ListGroupItem>
            <ListGroupItem className="justify-content-between">DEP <Badge pill>12</Badge> </ListGroupItem>

        
              </ListGroup>
          </div>
    );
  }
}
