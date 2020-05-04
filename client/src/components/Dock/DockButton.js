import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import './style.scss';


function DockButton(props) {
    const { path, label, img, imgInactive, isActive } = props;
    console.log(img)
    return (

        <div className="button">
            <img className="img" src={imgInactive} />
            <div className="label">{label}</div>
        </div>

    )
}

export default DockButton;