import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import './style.scss';


function DockButton(props) {
    const {path, label, isActive} = props;
    return (

            <div className="button">
                <img className="img"></img>
                <div className="label">{label}</div>
            </div>
      
    )
}

export default DockButton;