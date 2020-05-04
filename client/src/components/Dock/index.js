import React, {Component} from 'react';
import {connect} from 'react-redux';
import './style.scss';


class Dock extends Component {
    render () {
        console.log(this.props.auth)
        if (this.props.auth) {
            return <div className="dock">Dock</div>
        }
        else return <div className="dock">Logged out</div>
        
    }
}

function mapStateToProps({auth}) {
    return {auth}
}

export default connect(mapStateToProps)(Dock);