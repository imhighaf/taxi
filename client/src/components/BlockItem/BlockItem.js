import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import texts from '../../constants/translations';
import Screen from '../Screen'
import './style.scss';

const BlockLabel = (props) => {
    return <div className="block-label">{props.children}</div>
}

const BlockItem = (props) => {
    return (
        <div className="block-item">
            <div className="label">{props.label}</div>
            {props.value && <div className="value">{props.value}</div>}
            {props.action && <div className="action">&gt;</div>}
        </div>
    )
}

export default class Block extends Component {
    static Item = BlockItem;
    static Label = BlockLabel;

    render() {
        return (
            <div className="block">
                {this.props.children}
            </div>
        )
    }

}