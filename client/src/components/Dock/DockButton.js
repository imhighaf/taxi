import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
//import './style.scss';


function DockButton(props) {
    const { path, label, img, imgInactive, isActive, history } = props;
    return (

        <div className="button" onClick={() => history.push(path)}>
            <img className="img" src={imgInactive} />
            <div className="label">{label}</div>
        </div>

    )
}

export default withRouter(DockButton);