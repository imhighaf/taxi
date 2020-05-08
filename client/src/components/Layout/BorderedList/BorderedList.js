import React from 'react';
import './style.scss';


function BorderedList (props) {
    //TODO:
    return (
        <div className="bordered-list">
            {props.children}
        </div>
    )
}

export default BorderedList;