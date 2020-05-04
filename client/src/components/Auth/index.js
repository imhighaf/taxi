import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions';
//import './style.scss';


class Auth extends Component {
    componentDidMount() {
       if (this.props.auth) {
           console.log('$$$$$')
           this.props.history.push('/home')
       }
       ///unauth
       this.props.history.push('/login')
    }
    render() {
        console.log('render auth')
        return (
            <div> </div>
        )

    }
}

function mapStateToProps({ auth }) {
    return { auth }
}

export default connect(mapStateToProps, { fetchUser })(Auth);