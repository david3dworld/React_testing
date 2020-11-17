import React, { Component } from 'react'
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import constants from 'utils/constants'

class SidebarLogo extends Component {

    constructor(props) {
        super(props)
        
        this.state = {}
    }
    

    render() {
        return (
            <div className="sidebar-logo">
                <img src={constants.DEFAULT_LOGO}  alt="" onClick={() => {this.props.history.push('/')}}/>
                <h4 className="p-0 m-0 ml-2">{constants.APP_NAME}</h4>
            </div>
        )
    }
}

export default withRouter(connect(null, {

})(SidebarLogo));
