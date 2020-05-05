import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import texts from '../../constants/translations';
import Screen from '../Screen'
import CarList from '../CarList';
import { TitleBar } from '../Layout';

import cars from './cars';
//import './style.scss';

function ShiftsScreen(props) {
    const handleClickcar = (car) => {
        console.log(car)
        const id = car.no.toLowerCase();
        const path = `/car/${id}`;
        props.history.push(path);
    }
    return (
        <Screen>
            <TitleBar title={texts.CARS}></TitleBar>
            <CarList
                cars={cars}
                onClickItem={handleClickcar}
            ></CarList>
        </Screen>
    )
}

export default ShiftsScreen;