
import React, {Component} from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class SidenavContent extends Component {

    mainMenus = {
        'dashboard': 'Dashboard',
        'users': 'Users',
        'posts': 'Posts'
    }

    componentDidMount() {

        const menuLi = document.getElementsByClassName('sub-menu-title');
        for (let i = 0; i < menuLi.length; i++) {
            menuLi[i].onclick = function (event) {
                this.parentElement.classList.toggle('open');
            }
        }
        this.checkOpenMenu(this.props)
    }

    closest(el, selector) {
        try {
            let matchesFn;
            // find vendor prefix
            ['matches', 'webkitMatchesSelector', 'mozMatchesSelector', 'msMatchesSelector', 'oMatchesSelector'].some(function (fn) {
                if (typeof document.body[fn] == 'function') {
                    matchesFn = fn;
                    return true;
                }
                return false;
            });

            let parent;

            // traverse parents
            while (el) {
                parent = el.parentElement;
                if (parent && parent[matchesFn](selector)) {
                    return parent;
                }
                el = parent;
            }
        } catch (e) {

        }

        return null;
    }

    checkOpenMenu(props){
        let urlNames = props.history.location.pathname.split('/')
        if (urlNames.length < 3){
            return;
        }
        const menuLi = document.getElementsByClassName('sub-menu-title');
        for (let i = 0; i < menuLi.length; i++) {
            let flag = false;
            for (let j = 0; j < menuLi[i].childNodes.length; j++) {
                if (menuLi[i].childNodes[j].className === "nav-text" && menuLi[i].childNodes[j].textContent === this.mainMenus[urlNames[1]]) {
                    flag = true;
                    break;
                }        
            }
            if (flag && !menuLi[i].parentElement.classList.contains('open')){
                menuLi[i].parentElement.classList.add('open')
            }
        }
    }

    componentWillReceiveProps(newProps){
        this.checkOpenMenu(newProps);
    }

    render() {
        return (
            <div>
                <ul className="nav-menu">
                    <li className="menu no-arrow">
                        <NavLink to="/dashboard">
                            <FontAwesomeIcon icon="chart-area" className="mr-3"/>
                            <span className="nav-text">Dashboard</span>
                        </NavLink>
                    </li>
                    <li className="menu no-arrow">
                        <NavLink to="/users">
                            <FontAwesomeIcon icon="users" className="mr-3"/>
                            <span className="nav-text">Users</span>
                        </NavLink>
                    </li>
                    <li className="menu no-arrow">
                        <NavLink to="/posts">
                            <FontAwesomeIcon icon="envelope-open" className="mr-3"/>
                            <span className="nav-text">Posts</span>
                        </NavLink>
                    </li>
                    {/* <li className="ui_tooltip menu">
                        <a role="button" href='#' onClick={e => e.preventDefault()} className="sub-menu-title">
                            <FontAwesomeIcon icon="clock" className="mr-3"/>
                            <span className="nav-text">Club Events</span>
                        </a>
                        <ul className="sub-menu">
                            <li>
                                <NavLink className="list" to="/events/calendar">
                                    <FontAwesomeIcon icon="calendar" className="mr-3"/>
                                    <span className="nav-text">Calendar</span>
                                </NavLink>
                            </li>
                        </ul>
                        <ul className="sub-menu">
                            <li>
                                <NavLink className="list" to="/events/list">
                                    <FontAwesomeIcon icon="list" className="mr-3"/>
                                    <span className="nav-text">List</span>
                                </NavLink>
                            </li>
                        </ul>
                    </li> */}
                </ul>
            </div>
        );
    }
}

export default withRouter(SidenavContent);
