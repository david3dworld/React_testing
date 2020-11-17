import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import configureStore from './store';
import 'rc-drawer/assets/index.css';
import './sass/index.scss';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Container from './containers'

library.add(fas);
export const store = configureStore ();

class App extends Component {

    render() {
        return (
            <div className="app">
                <Provider store={store}>
                    <Router>
                        <Route path="/" component={Container} />
                    </Router>
                    <ToastContainer />
                </Provider>
            </div>
        );
    }
}

export default App;
