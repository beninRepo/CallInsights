import React, { Component, Fragment } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {
    Row, Col,
    Button,
    UncontrolledButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

import {
    AreaChart, Area, LineChart, Line,
    ResponsiveContainer,
    BarChart, Bar, Tooltip,
    ComposedChart,
    CartesianGrid,XAxis
} from 'recharts';

import {
    faAngleUp,
    faAngleDown,
    faArrowLeft,
    faArrowRight,
    faEllipsisH,

} from '@fortawesome/free-solid-svg-icons';

import bg1 from '../../../../assets/utils/images/dropdown-header/abstract1.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const data = {totalcalls: '56',incoming:'37',outgoing:'19',durationTotal:'01:30:00',durationIN:'00:55:00',durationOUT:'00:35:00'}

const data2 = [
    { month: 'Q1', total: 5400, incoming: 5240, outgoing: 1240 },
    { month: 'Q2', total: 7300, incoming: 4139, outgoing: 3221 },
    { month: 'Q3', total: 8200, incoming: 7980, outgoing: 5229 },
    { month: 'Q4', total: 6278, incoming: 4390, outgoing: 3200 },
   ];


export default class CallDetails extends Component {

    render() {
        return (
            <Fragment>
                <ReactCSSTransitionGroup
                    component="div"
                    transitionName="TabsAnimation"
                    transitionAppear={true}
                    transitionAppearTimeout={0}
                    transitionEnter={false}
                    transitionLeave={false}>
                    <div>
                      <Row>
                        <Col md="4">
                                <div className="card mb-3 bg-arielle-smile widget-chart text-white card-border">
                                    <div className="widget-chart-actions">
                                        <UncontrolledButtonDropdown>
                                            <DropdownToggle color="link" className="text-white">
                                                <FontAwesomeIcon icon={faEllipsisH} />
                                            </DropdownToggle>
                                            <DropdownMenu className="dropdown-menu-lg dropdown-menu-right">
                                                <Nav vertical>
                                                    <NavItem className="nav-item-header">
                                                     Duration
                                                    </NavItem>  
                                                    <NavItem>
                                                        <NavLink>
                                                       Total
                                                            <div className="ml-auto badge badge-pill badge-info">{data.durationTotal}</div>
                                                        </NavLink>
                                                    </NavItem>
                                                    <NavItem>
                                                        <NavLink>
                                                            Incoming
                                                            <div className="ml-auto badge badge-pill badge-success">{data.durationIN}</div>
                                                        </NavLink>
                                                    </NavItem>
                                                    <NavItem>
                                                        <NavLink>
                                                            Outgoing
                                                            <div className="ml-auto badge badge-pill badge-warning">{data.durationOUT}</div>
                                                        </NavLink>
                                                    </NavItem>
                                                </Nav>
                                            </DropdownMenu>
                                        </UncontrolledButtonDropdown>
                                    </div>
                                <div className="icon-wrapper rounded-circle">
                                    <div className="icon-wrapper-bg bg-white opacity-1" />
                                    <i className="lnr-database text-white" />
                                </div>
                                    <div className="widget-numbers">
                                        {data.totalcalls}
                                    </div>
                                    <div className="widget-heading">
                                        <hr/>
                                    <b>Total Calls</b>
                                    </div>
                               </div>
                        </Col>
                        <Col md="4">
                                <div className="card mb-3 bg-grow-early widget-chart text-white card-border">
                                    
                                    <div className="icon-wrapper rounded-circle">
                                        <div className="icon-wrapper-bg bg-white opacity-1" />
                                        <i className="lnr-phone-handset text-white" />
                                    </div>
                                    <div className="widget-numbers">
                                        {data.incoming}
                                    </div>
                                    <div className="widget-heading">
                                        <hr />
                                        <b>Incoming Calls</b>
                                    </div>
                                    
                                </div>
                            </Col>
                        <Col md="4">
                                <div className="card mb-3 bg-love-kiss widget-chart text-white card-border">
                                    
                                    <div className="icon-wrapper rounded-circle">
                                        <div className="icon-wrapper-bg bg-white opacity-1" />
                                        <i className="lnr-volume-high text-white" />
                                    </div>
                                    <div className="widget-numbers">
                                        {data.outgoing}
                                    </div>
                                    <div className="widget-heading">
                                        <hr />
                                        <b>Outgoing Calls</b>
                                    </div>

                                </div>
                        </Col>
                        </Row>  
                    </div>
                </ReactCSSTransitionGroup>
            </Fragment>
        );
    }
}
