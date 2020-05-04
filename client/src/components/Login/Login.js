import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './style.scss';
import logo from './taxi-2.svg';
import * as actions from '../../actions';

const LoginScreen = (props) => {
    const { auth } = props;
    if (auth) {
        return <Redirect to="/home"></Redirect>
    }
    const loginPage = (
        <div className="loginScreen">
            {<a className="loginButton" href="/auth/google">
                <img src={logo} width="200px"></img>
            </a>}
        </div>
    )

    return loginPage;
}


function mapStateToProps({ auth }) {
    return { auth }
}

export default connect(mapStateToProps, actions)(LoginScreen);