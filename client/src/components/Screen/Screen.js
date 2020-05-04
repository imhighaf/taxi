import React, {Component} from 'react';
import {connect} from 'react-redux';
import './style.scss';

import Dock from '../Dock';


class Screen extends Component {
    render () {
       return (
           <div className="screen">
               <div className="content">{this.props.children}</div>
               <Dock />
           </div>
       )
    }
}

function mapStateToProps({auth}) {
    return {auth}
}

export default connect(mapStateToProps)(Screen);