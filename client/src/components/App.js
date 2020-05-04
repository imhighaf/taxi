import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { connect } from 'react-redux';
import * as actions from '../actions';

import './app.scss';
import LoginScreen from './Login';
import CarDetailsScreen from './CarDetailsScreen';
import Screen from './Screen'
import ProtectedRoute from './ProtectedRoute';


const LogoutLink = () => {
    return <a href="/api/logout">Logout</a>
}
const CarLink = () => {
    return <Link to="/car/123">Car details</Link>
}

const HomeScreen = () => (
    <Screen>
        <CarLink />
        <br />
        <br />
        <br />
        <LogoutLink />
    </Screen>
)

class App extends Component {
    async componentDidMount() {
        const user = await this.props.fetchUser()
        console.log('app mounted, user:', user);
    }


    render() {
        return (
            <div id="app" className="">
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact><Redirect to="/home" /></Route>
                        <Route path="/login" exact component={LoginScreen}></Route>

                        <ProtectedRoute path="/home" excat component={HomeScreen}></ProtectedRoute>
                        <ProtectedRoute path="/car/:id" excat component={CarDetailsScreen}></ProtectedRoute>

                        <Route path='*'><Redirect to="/home" /></Route>
                    </Switch>
                </BrowserRouter>

            </div>
        )
    }
}


export default connect(null, actions)(App);