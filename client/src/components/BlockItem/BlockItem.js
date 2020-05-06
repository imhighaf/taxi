import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import texts from '../../constants/translations';
import Screen from '../Screen'
import './style.scss';

const BlockLabel = (props) => {
    return <div className="block-label">{props.children}</div>
}

const Panel = (props) => {
    const classes = cn('item', { 'item-panel': props.panel }, props.classes)
    return (
        <div className="item item-panel">
            <div className="label">{props.label}</div>
            {props.value && <div className="value">{props.value}</div>}
            {props.action && <div className="action">&gt;</div>}
        </div>
    )
}


export default class Block extends Component {
    static Panel = Panel;
    static Label = BlockLabel;

    render() {
        return (
            <div className="block">
                {this.props.children}
            </div>
        )
    }

}