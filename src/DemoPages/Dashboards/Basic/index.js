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
//C: \working\Clone\CallInsights\src\Layout\AppMain\PageTitle.js
import PageTitle from '../../../Layout/AppMain/PageTitle';
import DynamicDoughnutExample from '../../Charts/ChartJs/Examples/dynamicDoughnut';
import ListGroupBadge from '../../Elements/ListGroup/Examples/Basic/ListGroupBadge';
import TabExample from '../../Components/Tabs';











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
                                            <CardBody className="pt-2">
                                                <Row className="mt-3">
                                                    <Col md="6">
                                                        <div className="widget-content">
                                                            <div className="widget-content-outer">
                                                                <div className="widget-content-wrapper">
                                                                    <div className="widget-content-left mr-3">
                                                                        <div className="widget-numbers fsize-3 text-muted">
                                                                            63%
                                                                        </div>
                                                                    </div>
                                                                    <div className="widget-content-right">
                                                                        <div className="text-muted opacity-6">
                                                                            Count
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="widget-progress-wrapper mt-1">
                                                                    <Progress
                                                                        className="progress-bar-sm progress-bar-animated-alt"
                                                                        color="danger"
                                                                        value="63"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col md="6">
                                                        <div className="widget-content">
                                                            <div className="widget-content-outer">
                                                                <div className="widget-content-wrapper">
                                                                    <div className="widget-content-left mr-3">
                                                                        <div className="widget-numbers fsize-3 text-muted">
                                                                            32%
                                                                        </div>
                                                                    </div>
                                                                    <div className="widget-content-right">
                                                                        <div className="text-muted opacity-6">
                                                                            Cost
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="widget-progress-wrapper mt-1">
                                                                    <Progress
                                                                        className="progress-bar-sm progress-bar-animated-alt"
                                                                        color="success"
                                                                        value="32"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                                <div className="divider mt-4"/>
                                                <Row>
                                                   
                                                </Row>
                                            </CardBody>
                                            <div className="widget-chart p-0">
                                                <div className="widget-chart-content">
                                                    <div className="widget-description mt-0 text-warning">
                                                        <FontAwesomeIcon icon={faArrowLeft}/>
                                                        <span className="pl-1">175.5%</span>
                                                        <span className="text-muted opacity-8 pl-1">Cost Forecast</span>
                                                    </div>
                                                </div>
                                                <ResponsiveContainer height={187}>
                                                    <AreaChart data={data} margin={{top: -45, right: 0, left: 0, bottom: 0}}>
                                                        <defs>
                                                            <linearGradient id="colorPv2" x1="0" y1="0" x2="0" y2="1">
                                                                <stop offset="10%" stopColor="var(--warning)" stopOpacity={0.7}/>
                                                                <stop offset="90%" stopColor="var(--warning)" stopOpacity={0}/>
                                                            </linearGradient>
                                                        </defs>
                                                        <Tooltip/>
                                                        <Area type='monotoneX' dataKey='uv' stroke='var(--warning)' strokeWidth={2} fillOpacity={1}
                                                              fill="url(#colorPv2)"/>
                                                    </AreaChart>
                                                </ResponsiveContainer>
                                            </div>
                                        </TabPane>
                                        <TabPane tabId="22">
                                            <div className="widget-chart p-0">
                                                <ResponsiveContainer height={179}>
                                                    <ComposedChart data={data2}>
                                                        <CartesianGrid stroke="#ffffff"/>
                                                        <Area type="monotone" dataKey="amt" fill="#f7ffd0" stroke="#85a200"/>
                                                        <Bar dataKey="pv" barSize={16} fill="var(--primary)"/>
                                                        <Line type="monotone" dataKey="uv" strokeWidth="3" stroke="var(--danger)"/>
                                                    </ComposedChart>
                                                </ResponsiveContainer>
                                                <div className="widget-chart-content mt-3 mb-2">
                                                    <div className="widget-description mt-0 text-success">
                                                        <FontAwesomeIcon icon={faArrowUp}/>
                                                        <span className="pl-2 pr-2">37.2%</span>
                                                        <span className="text-muted opacity-8">performance increase</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <CardBody className="pt-2">
                                                <Row>
                                                    <Col md="6">
                                                        <div className="widget-content">
                                                            <div className="widget-content-outer">
                                                                <div className="widget-content-wrapper">
                                                                    <div className="widget-content-left mr-3">
                                                                        <div className="widget-numbers fsize-3 text-muted">
                                                                            230 AED
                                                                        </div>
                                                                    </div>
                                                                    <div className="widget-content-right">
                                                                        <div className="text-muted opacity-6">
                                                                            Department 1
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="widget-progress-wrapper mt-1">
                                                                    <Progress
                                                                        className="progress-bar-sm progress-bar-animated-alt"
                                                                        color="warning"
                                                                        value="23"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col md="6">
                                                        <div className="widget-content">
                                                            <div className="widget-content-outer">
                                                                <div className="widget-content-wrapper">
                                                                    <div className="widget-content-left mr-3">
                                                                        <div className="widget-numbers fsize-3 text-muted">
                                                                            760 AED
                                                                        </div>
                                                                    </div>
                                                                    <div className="widget-content-right">
                                                                        <div className="text-muted opacity-6">
                                                                             Department 2
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="widget-progress-wrapper mt-1">
                                                                    <Progress
                                                                        className="progress-bar-sm progress-bar-animated-alt"
                                                                        color="info"
                                                                        value="76"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                                <div className="divider mt-4"/>
                                                <Row>
                                                    <Col md="6">
                                                        <div className="widget-content">
                                                            <div className="widget-content-outer">
                                                                <div className="widget-content-wrapper">
                                                                    <div className="widget-content-left mr-3">
                                                                        <div className="widget-numbers fsize-3 text-muted">
                                                                            830 AED
                                                                        </div>
                                                                    </div>
                                                                    <div className="widget-content-right">
                                                                        <div className="text-muted opacity-6">
                                                                             Department 3
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="widget-progress-wrapper mt-1">
                                                                    <Progress
                                                                        className="progress-bar-sm progress-bar-animated-alt"
                                                                        color="danger"
                                                                        value="83"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col md="6">
                                                        <div className="widget-content">
                                                            <div className="widget-content-outer">
                                                                <div className="widget-content-wrapper">
                                                                    <div className="widget-content-left mr-3">
                                                                        <div className="widget-numbers fsize-3 text-muted">
                                                                            480 AED
                                                                        </div>
                                                                    </div>
                                                                    <div className="widget-content-right">
                                                                        <div className="text-muted opacity-6">
                                                                             Department 4
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="widget-progress-wrapper mt-1">
                                                                    <Progress
                                                                        className="progress-bar-sm progress-bar-animated-alt"
                                                                        color="alternate"
                                                                        value="48"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>

                                            </CardBody>
                                        </TabPane>

                                        <TabPane tabId="33">
                                            <CardBody className="pt-2">
                                                <Row>
                                                    <Col lg="6">
                                                        <div className="card mb-3 widget-chart">
                                                            <div className="widget-chart-content">
                                                                <div className="icon-wrapper rounded-circle">
                                                                    <div className="icon-wrapper-bg bg-primary" />
                                                                    <i className="lnr-cog text-primary" />
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
                                                                <ResponsiveContainer height={100}>
                                                                    <LineChart data={data}
                                                                        margin={{ top: 5, right: 5, left: 5, bottom: 0 }}>
                                                                        <Line type='monotone' dataKey='pv' stroke='#3ac47d'
                                                                            strokeWidth={3} />
                                                                    </LineChart>
                                                                </ResponsiveContainer>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col lg="6">
                                                        <div className="card mb-3 widget-chart">
                                                            <div className="widget-chart-content">
                                                                <div className="icon-wrapper rounded-circle">
                                                                    <div className="icon-wrapper-bg bg-danger" />
                                                                    <i className="lnr-laptop-phone text-danger" />
                                                                </div>
                                                                <div className="widget-numbers">
                                                                    5.82k
                                                </div>
                                                                <div className="widget-subheading">
                                                                   Count
                                                </div>
                                                                <div className="widget-description text-danger">
                                                                    <FontAwesomeIcon icon={faAngleDown} />
                                                                    <span className="pl-1">54.1%</span>
                                                                </div>
                                                            </div>
                                                            <div className="widget-chart-wrapper chart-wrapper-relative">
                                                                <ResponsiveContainer height={100}>
                                                                    <BarChart data={data}>
                                                                        <Bar dataKey='uv' fill='#81a4ff' stroke='#3f6ad8' strokeWidth={2} />
                                                                    </BarChart>
                                                                </ResponsiveContainer>
                                                            </div>
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
                                                        <TableSizing />
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
                                                        <TableHover />
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
                                                        <TableResponsive />
                                                    </CardBody>
                                                </Card>
                                            </CardBody>
                                        </TabPane>
                                        <TabPane tabId="2">
                                            <CardBody className="pt-2">
                                                <Card className="main-card mb-3">
                                                     <CardBody>
                                                        <CardTitle>Last 10 Calls</CardTitle>
                                                        <TableResponsive />
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
