import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './style.scss';


function Board(props) {
    const { title, sub, actionIcon, item, action, value, warningIcon } = props;
    return (
        <div className="board">
            <div className="titles">
                <div className="title">{title}</div>
                <div className="sub">{sub}</div>
            </div>
            <div className="action-block">
                {warningIcon && <div className="warning">{warningIcon}</div>}
                {value && <div className="value">{value}</div>}
                {action && <div className="action" onClick={() => action(item)}>{actionIcon}</div>}
            </div>

        </div>
    )
}

export default Board;