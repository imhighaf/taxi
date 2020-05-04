import React, { Component } from 'react';
import { connect } from 'react-redux';
import translations from '../../constants/translations'
import './style.scss';

import Dock from '../Dock';


function Header(props) {
    return (
        <div className="header">
            <div className="back"><i className="arrow"></i>{translations.BACK}</div>
            <div className="title">{props.title}</div>
            <div className="action"></div>
        </div>
    )
}


class Screen extends Component {
    render() {
        return (
            <div className="screen">
                <Header title ="Название Экрана"/>
                <div className="content">{this.props.children}</div>
                <Dock />
            </div>

        )
    }
}

function mapStateToProps({ auth }) {
    return { auth }
}

export default connect(mapStateToProps)(Screen);