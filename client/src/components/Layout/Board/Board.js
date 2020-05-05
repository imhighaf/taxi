import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './style.scss';


function Board(props) {
    const { title, sub, icon, item, onClickItem } = props;
    return (

        <div className="board">
            <div className="titles" onClick={()=>onClickItem(item)}>
                <div className="title">{title}</div>
                <div className="sub">{sub}</div>
            </div>
            <div className="action" >{icon}</div>
        </div>

    )
}

export default Board;