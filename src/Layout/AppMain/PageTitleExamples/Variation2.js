import React, {Component, Fragment} from 'react';

import {
    UncontrolledDropdown, DropdownToggle, DropdownMenu, Nav, NavItem, NavLink,
    Button,
    UncontrolledTooltip
} from 'reactstrap';

import {
    faStar,
    faBusinessTime

} from '@fortawesome/free-solid-svg-icons';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {
    toast,
    Slide
} from 'react-toastify';

export default class TitleComponent2 extends Component {
    toggle(name) {
        this.setState({
            [name]: !this.state[name],
            progress: 0.5,
        })
    }

   

    render() {
        return (
            <Fragment>
             <UncontrolledDropdown className="d-inline-block">
                    <DropdownToggle color="info" className="btn-shadow" caret>
                        <span className="btn-icon-wrapper pr-2 opacity-7">
                            <FontAwesomeIcon icon={faBusinessTime}/>
                        </span>
                        Quick Links
                    </DropdownToggle>
                    <DropdownMenu right>
                        <Nav vertical>
                            <NavItem>
                                <NavLink href='#/dashboards/basic'>
                                    <i className="nav-link-icon lnr-rocket"> </i>
                                    <span>CDR Dashboard</span>
                                   </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href='#/dashboards/dynamic'>
                                    <i className="nav-link-icon lnr-license"> </i>
                                    <span>Dynamic Dashboard</span>
                                   </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href='#/elements/cdr-report'>
                                    <i className="nav-link-icon lnr-database"> </i>
                                    <span>CDR Report</span>
                                </NavLink>
                            </NavItem>
                            </Nav>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </Fragment>
        );
    }
}