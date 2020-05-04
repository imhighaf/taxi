import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { connect } from 'react-redux';
import * as actions from '../actions';

import './app.scss';
import Dock from './Dock';
import LoginScreen from './Login';
import ProtectedRoute from './ProtectedRoute';
import Auth from './Auth'
 
const history = createBrowserHistory();
const Dashboard = () => <h2>DAshboard</h2>
const Logout = () => {
    return <a  href="/api/logout">Logout</a>
}

class App extends Component {
    async componentDidMount() {
        const user = await this.props.fetchUser()
    }

    render() {
        return (
            <div className="wrapper">
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact><Redirect to="/home" /></Route>
                       
                        <Route path="/login" exact component={LoginScreen}></Route>
              
                        <ProtectedRoute path="/home" excat component={Logout}></ProtectedRoute>

                        <Route path='*'><Redirect to="/home" /></Route>
                    </Switch>
                </BrowserRouter>

            </div>
        )
    }
}


export default connect(null, actions)(App);