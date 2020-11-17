import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Drawer from 'rc-drawer';
import SidenavContent from './SidenavContent';
import SidebarLogo from './SidebarLogo';
import {
    toggleCollapsedNav, 
    updateWindowWidth
} from '../../store/actions';
import './index.scss'

class SideBar extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {}
    }


    onToggleCollapsedNav = (e) => {
        const val = !this.props.navCollapsed;
        this.props.toggleCollapsedNav(val);
    };
    
    componentDidMount() {
        window.addEventListener('resize', () => {
            this.props.updateWindowWidth(window.innerWidth)
        });
    }

    render() {
        const {navCollapsed, width} = this.props;
        let type = true;
        if (width < 1200) {
            type = false;
        }

        return (
            <Drawer docked={type} className="app-sidebar d-xl-flex"
                    style={{overflow: 'auto'}}
                    touch={true}
                    position={'left'}
                    transitions={true}
                    enableDragHandle={true}
                    open={navCollapsed}
                    onOpenChange={this.onToggleCollapsedNav}
                    sidebar={<div className="side-nav">
                        <SidebarLogo history={this.props.history}/>
                        <SidenavContent user={this.props.user}/>
                    </div>}>
                <div/>
            </Drawer>
        );
    }
}

const mapStateToProps = (reducer) => {
    const {navCollapsed, width, user} = reducer;
    return {navCollapsed, width, user}
};

export default withRouter(connect(mapStateToProps, {toggleCollapsedNav, updateWindowWidth})(SideBar));
