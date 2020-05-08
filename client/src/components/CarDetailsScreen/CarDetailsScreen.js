import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import texts from '../../constants/translations';
import Screen from '../Screen'
import Block from '../BlockItem';
import {TitleBar, Board} from '../Layout';

import {capitalize} from '../../utils';
//import './style.scss';


function CarDetailsScreen(props) {
    const car = props.carList.find(car => {
        console.log(car.brand)
        return props.match.params.id === car.id.toLowerCase();
    });
    const title = `${capitalize(car.brand)} ${capitalize(car.model)}`
    return (
        <Screen>
            <TitleBar title={title} sub={car.id}/>
            <Board  title={texts.mileage } value={car.mileage}/>
        </Screen>
    )
}

function mapStateToProps({ cars }) {
    return { carList: cars.carList }
}
export default withRouter(
    connect(mapStateToProps)(CarDetailsScreen)
);