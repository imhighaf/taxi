import React, { Component } from 'react';
import './style.scss';

const Right = () => {
    return (
        <div className="icon-right">
            <i className="arrow"></i>
        </div>
    )
}

class Icon extends Component {
    static Right = Right;
    render () {
        return (
            <div></div>
        )

    }
}



export default Icon;