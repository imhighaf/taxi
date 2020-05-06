import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import translations from '../../constants/translations'
import './style.scss';

import Dock from '../Dock';


function Header(props) {
    return (
        <div className="header">
            <div className="back"
                onClick={props.history.goBack}
            >
                <i className="arrow"></i>{translations.BACK}
            </div>
            <div className="title">{props.title}</div>
            <div className="action"></div>
        </div>
    )
}

const RouteHeader = withRouter(Header);


class Screen extends Component {

    render() {

        return (
            <div className="screen">
                <RouteHeader title="Название Экрана" />
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