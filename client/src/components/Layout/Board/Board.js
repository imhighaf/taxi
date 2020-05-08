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
            <div className="action-block" onClick={() => action && action(item)}>
                {warningIcon && <img className="warning" width="20px" src={warningIcon} />}
                {value && <div className="value">{value}</div>}
                {actionIcon && <div className="action" >{actionIcon}</div>}
            </div>

        </div>
    )
}

export default Board;