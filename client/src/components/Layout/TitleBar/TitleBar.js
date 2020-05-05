import React from 'react';
import './style.scss';


function TitleBar(props) {
    const { title, sub, } = props;
    return (

        <div className="title-bar">
            <div className="title">{title}</div>
        </div>

    )
}

export default TitleBar;