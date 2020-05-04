import React, { Component } from 'react';
import { connect } from 'react-redux';
import DockButton from './DockButton';
import buttons from './buttons';
import './style.scss';


class Dock extends Component {
    render() {

        return (
            <div className="dock">
                {buttons.map(button => <DockButton key={button.label} {...button} />)}
            </div>
        )
    }

}


export default connect(null)(Dock);