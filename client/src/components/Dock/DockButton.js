import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import './style.scss';


function DockButton(props) {
    const {path, label, isActive} = props;
    return (
        // <Link to='/'>
            <div className="button">
                <img></img>
                <div>{props.label}</div>
            </div>
        // </Link>
    )
}

export default DockButton;