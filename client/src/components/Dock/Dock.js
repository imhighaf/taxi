import React, { Component } from 'react';
import { connect } from 'react-redux';
import DockButton from './DockButton';
import './style.scss';


const buttons = [1, 2, 3, 4]


class Dock extends Component {
    render() {

        return (
            <div className="dock">
                {buttons.map(btn => <DockButton label={btn} />)}
            </div>
        )
    }

}


function mapStateToProps({ auth }) {
    return { auth }
}

export default connect(mapStateToProps)(Dock);