import { faAngleDown, faAngleUp, faArrowLeft, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classnames from 'classnames';
import React, { Component, Fragment } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Button, Card, CardBody, CardHeader, CardTitle, Col, Progress, Row, TabContent, TabPane } from 'reactstrap';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, ComposedChart, Line, LineChart, ResponsiveContainer, Tooltip } from 'recharts';
import avatar1 from '../../../assets/utils/images/avatars/1.jpg';
import avatar2 from '../../../assets/utils/images/avatars/2.jpg';
import avatar3 from '../../../assets/utils/images/avatars/3.jpg';
import avatar4 from '../../../assets/utils/images/avatars/4.jpg';
import TableResponsive from '../../../DemoPages/Tables/RegularTables/Examples/TableResponsive';
import TableSizing from '../../../DemoPages/Tables/RegularTables/Examples/TableSizing';
import TableExample from '../../../DemoPages/Tables/RegularTables/Examples/Table';
import TableHover from '../../../DemoPages/Tables/RegularTables/Examples/TableHover';
import MissedCalls from '../../../DemoPages/Tables/RegularTables/Examples/MissedCall';
import Calls from '../../../DemoPages/Tables/RegularTables/Examples/Calls';
import Departments from '../../../DemoPages/Tables/RegularTables/Examples/Departments';
import TopMissedCalls from '../../../DemoPages/Tables/RegularTables/Examples/TopMissedCalls';
//C: \working\Clone\CallInsights\src\Layout\AppMain\PageTitle.js
import PageTitle from '../../../Layout/AppMain/PageTitle';
import ExtensionChart from '../../Charts/ChartJs/Examples/ExtensionChart';
import DynamicDoughnutExample from '../../Charts/ChartJs/Examples/dynamicDoughnut';
import ListGroupBadge from '../../Elements/ListGroup/Examples/Basic/ListGroupBadge';
import TabExample from '../../Components/Tabs';
import DepartmentCostChart from '../../Charts/ChartJs/Examples/DepartmentCostChart';
import CostChart from '../../Charts/ChartJs/Examples/CostChart';
import ReactStoreIndicator from 'react-score-indicator';
import CountUp from 'react-countup';


const data = [
    {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
    {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
    {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
    {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
    {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
    {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
    {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
    {name: 'Page C', uv: 2000, pv: 6800, amt: 2290},
    {name: 'Page D', uv: 4780, pv: 7908, amt: 2000},
    {name: 'Page E', uv: 2890, pv: 9800, amt: 2181},
    {name: 'Page F', uv: 1390, pv: 3800, amt: 1500},
    {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];

const data2 = [
    {name: 'Page A', uv: 5400, pv: 5240, amt: 1240},
    {name: 'Page B', uv: 7300, pv: 4139, amt: 3221},
    {name: 'Page C', uv: 8200, pv: 7980, amt: 5229},
    {name: 'Page D', uv: 6278, pv: 4390, amt: 3200},
    {name: 'Page E', uv: 3189, pv: 7480, amt: 6218},
    {name: 'Page D', uv: 9478, pv: 6790, amt: 2200},
    {name: 'Page E', uv: 1289, pv: 1980, amt: 7218},
    {name: 'Page F', uv: 3139, pv: 2380, amt: 5150},
    {name: 'Page G', uv: 5349, pv: 3430, amt: 3210},
];

export default class AnalyticsDashboard1 extends Component {
    constructor() {
        super();

        this.state = {
            dropdownOpen: false,
            activeTab1: '11',
            activeTab2: '1',
            activeTab3: '1',

        };
       
        this.toggle = this.toggle.bind(this);
        this.toggle1 = this.toggle1.bind(this);
        this.toggle2 = this.toggle2.bind(this);
        this.toggle3 = this.toggle3.bind(this);

    }
   
    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    toggle1(tab) {
        if (this.state.activeTab1 !== tab) {
            this.setState({
                activeTab1: tab
            });
        }
    }
    toggle2(tab) {
        if (this.state.activeTab2 !== tab) {
            this.setState({
                activeTab2: tab
            });
        }
    }
    toggle3(tab) {
        if (this.state.activeTab3 !== tab) {
            this.setState({
                activeTab3: tab
            });
        }
    }
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
                        <PageTitle heading="Report"
                           
                            icon="pe-7s-display2 icon-gradient bg-mean-fruit" />
                        
                        <Row>
                            <Col md="12" lg="6">
                                <Card className="mb-3">
                                    <CardHeader className="card-header-tab">
                                        <div className="card-header-title">
                                            <i className="header-icon lnr-rocket icon-gradient bg-tempting-azure"> </i>
                                            Insights
                                        </div>
                                        <div className="btn-actions-pane-right">
                                            <Button outline
                                                    className={"border-0 btn-pill btn-wide btn-transition " + classnames({active: this.state.activeTab1 === '11'})}
                                                    color="primary" onClick={() => {
                                                this.toggle1('11');
                                            }}>Extensions</Button>
                                            <Button outline
                                                    className={"ml-1 btn-pill btn-wide border-0 btn-transition " + classnames({active: this.state.activeTab1 === '22'})}
                                                color="primary" onClick={() => {
                                                    this.toggle1('22'); 
                                                }}>Department cost</Button>
                                            <Button outline
                                                className={"ml-1 btn-pill btn-wide border-0 btn-transition " + classnames({ active: this.state.activeTab1 === '33' })}
                                                color="primary" onClick={() => {
                                                    this.toggle1('33');
                                                }}>Monthly Cost</Button>
                                        </div>
                                    </CardHeader>
                                    <TabContent activeTab={this.state.activeTab1}>
                                        <TabPane tabId="11">
                                            
                                            <div className="widget-chart p-0">
                                                <CardBody>
                                                   <ExtensionChart />
                                                </CardBody>
                                                
                                            </div>
                                        </TabPane>
                                        <TabPane tabId="22">
                                            <div className="widget-chart p-0">
                                                <CardBody>
                                                    <DepartmentCostChart />
                                                </CardBody>
                                            </div>
                                            
                                        </TabPane>

                                        <TabPane tabId="33">
                                            <CardBody className="pt-2">
                                                <Row>
                                                    <Col lg="6">
                                                        <div className="card mb-3 widget-chart">
                                                            <div className="widget-chart-content">
                                                                <div className="icon-wrapper rounded-circle">
                                                                    <div className="icon-wrapper-bg bg-primary" />
                                                                    <i className="lnr-phone-handset text-primary" />
                                                                </div>
                                                                <div className="widget-numbers">
                                                                    45.8k
                                                </div>
                                                                <div className="widget-subheading">
                                                                    Cost
                                                </div>
                                                                <div className="widget-description text-success">
                                                                    <FontAwesomeIcon icon={faAngleUp} />
                                                                    <span className="pl-1">175.5%</span>
                                                                </div>
                                                            </div>
                                                            <div className="widget-chart-wrapper chart-wrapper-relative">
                                                                <CostChart/>
                                                               
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col lg="6">
                                                        <div className="card mb-3 widget-chart">
                                                            <div className="widget-chart-content">
                                                                <div className="icon-wrapper rounded-circle">
                                                                    <div className="icon-wrapper-bg bg-danger" />
                                                                    <i className="lnr-calendar-full text-danger" />
                                                                </div>
                                                                <hr /> 
                                                                <div className="widget-numbers">
                                                                    June
                                                </div>
                                                               <hr/> 
                                                               
                                                            </div>

                                                            <ReactStoreIndicator 
                                                                
                                                                 value={180}
                                                                maxValue={500}
                                                                
                                                                />
                                                           
                                                        </div>
                                                    </Col>
                                                </Row>
                                               
                                            </CardBody>
                                        </TabPane>
                                    </TabContent>
                                </Card>
                             
                                   <Card className="mb-3">
                                        <CardHeader className="card-header-tab">
                                            <div className="card-header-title">
                                                <i className="header-icon lnr-star  icon-gradient bg-tempting-azure"> </i>
                                               Top 15
                                        </div>
                                            <div className="btn-actions-pane-right">
                                                <Button outline
                                                    className={"border-0 btn-pill btn-wide btn-transition " + classnames({ active: this.state.activeTab3 === '1' })}
                                                    color="primary" onClick={() => {
                                                        this.toggle3('1');
                                                    }}>Department</Button>
                                                <Button outline
                                                    className={"ml-1 btn-pill btn-wide border-0 btn-transition " + classnames({ active: this.state.activeTab3 === '2' })}
                                                    color="primary" onClick={() => {
                                                        this.toggle3('2');
                                                }}>Extension</Button>
                                            <Button outline
                                                className={"ml-1 btn-pill btn-wide border-0 btn-transition " + classnames({ active: this.state.activeTab3 === '3' })}
                                                color="primary" onClick={() => {
                                                    this.toggle3('3');
                                                }}>Missed</Button>
                                            </div>
                                        </CardHeader>
                                        <TabContent activeTab={this.state.activeTab3}>
                                            <TabPane tabId="1">
                                                <CardBody className="pt-2">
                                                <Card className="main-card mb-3">
                                                    <CardBody>
                                                        <CardTitle>Department</CardTitle>
                                                        <Departments />
                                                    </CardBody>
                                                </Card>
                                                </CardBody>
                                            </TabPane>
                                            <TabPane tabId="2">
                                                <CardBody className="pt-2">
                                                <Card className="main-card mb-3">
                                                    <CardBody>
                                                        <CardTitle>Top Extensions</CardTitle>
                                                        <TableExample />
                                                    </CardBody>
                                                </Card>
                                                </CardBody>
                                        </TabPane>
                                        <TabPane tabId="3">
                                            <CardBody className="pt-2">
                                                <Card className="main-card mb-3">
                                                    <CardBody>
                                                        <CardTitle>Top Missed Calls</CardTitle>
                                                        <TopMissedCalls />
                                                    </CardBody>
                                                </Card>
                                            </CardBody>
                                        </TabPane>
                                        </TabContent>
                                        </Card>
                                       
                            </Col>
                            <Col md="12" lg="6">
                                <Card className="mb-3">
                                    <CardHeader className="card-header-tab">
                                        <div className="card-header-title">
                                            <i className="header-icon lnr-phone  icon-gradient bg-tempting-azure"> </i>
                                            Call Logs
                                        </div>
                                        <div className="btn-actions-pane-right">
                                            <Button outline
                                                className={"border-0 btn-pill btn-wide btn-transition " + classnames({ active: this.state.activeTab2 === '1' })}
                                                color="primary" onClick={() => {
                                                    this.toggle2('1');
                                                }}>Missed Calls</Button>
                                            <Button outline
                                                className={"ml-1 btn-pill btn-wide border-0 btn-transition " + classnames({ active: this.state.activeTab2 === '2' })}
                                                color="primary" onClick={() => {
                                                    this.toggle2('2');
                                                }}>Calls</Button>
                                           </div>
                                    </CardHeader>
                                    <TabContent activeTab={this.state.activeTab2}>
                                        <TabPane tabId="1">
                                            <CardBody className="pt-2">
                                                <Card className="main-card mb-3">
                                                    <CardBody>
                                                        <CardTitle>Last 10 Missed Calls</CardTitle>
                                                        <MissedCalls />
                                                    </CardBody>
                                                </Card>
                                            </CardBody>
                                        </TabPane>
                                        <TabPane tabId="2">
                                            <CardBody className="pt-2">
                                                <Card className="main-card mb-3">
                                                     <CardBody>
                                                        <CardTitle>Last 10 Calls</CardTitle>
                                                        <Calls />
                                                     </CardBody>
                                                </Card>
                                           </CardBody>
                                        </TabPane>
                                    </TabContent>
                                </Card>
                                <Row>
                                    <CardBody className="pt-2">
                                        <Card className="main-card mb-3">
                                            <CardBody>
                                                <CardTitle>Summary</CardTitle>
                                                <DynamicDoughnutExample />
                                            </CardBody>
                                        </Card>
                                    </CardBody>
                                </Row>
                            </Col>
                            
                        </Row>
                       
                        
                        
                    </div>
                </ReactCSSTransitionGroup>
            </Fragment>
        )
    }
}
