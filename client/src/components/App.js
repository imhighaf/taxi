import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { connect } from 'react-redux';
import * as actions from '../actions';

import './app.scss';
import LoginScreen from './Login';
import Screen from './Screen'
import ProtectedRoute from './ProtectedRoute';
 

const Logout = () => {
    return <a  href="/api/logout">Logout</a>
}

const LogoutScreen = () => <Screen><Logout /></Screen>

class App extends Component {
    async componentDidMount() {
        const user = await this.props.fetchUser()
        console.log('app mounted, user:', user);
    }


    render() {
        return (
            <div className="wrapper">
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact><Redirect to="/home" /></Route>
                       
                        <Route path="/login" exact component={LoginScreen}></Route>
              
                        <ProtectedRoute path="/home" excat component={LogoutScreen}></ProtectedRoute>

                        <Route path='*'><Redirect to="/home" /></Route>
                    </Switch>
                </BrowserRouter>

            </div>
        )
    }
}


export default connect(null, actions)(App);