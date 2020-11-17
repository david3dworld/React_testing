import React from 'react';
import { Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import PromoContainer from 'containers/promo';

class Container extends React.Component {

    constructor(props){

        super(props);

        this.state = {
         
        }

    }

    render() {

        return (
           <Switch>
               <Route path='/' component={PromoContainer}/>
           </Switch>
        );

    }

}


const mapStateToProps = (reducer) => {

    const { user } = reducer;

    return {user}

};


export default connect(mapStateToProps, {})(Container);