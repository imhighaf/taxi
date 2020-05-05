import React, { Component, Fragment} from 'react';
import { Link } from 'react-router-dom';
import texts from '../../constants/translations';
import Screen from '../Screen'
import Block from '../BlockItem';
//import './style.scss';
const car = {
    model: 'Hyundai Accent',
    no: 'AX1223XO',
    mileage: 78800,
    serviceGBO: 88800,
    engineOil: 78300,
    candles: 77781,
    boxOil: 107781,
    valveAdjustment: 70000,
    gearboxGBO: 137765,
    insuranceOSAGO: '15.08.2020',
    insuranceKASKO: '01.07.2020',
}

function renderCarProperty(key, value) {
    return (
        <Block.Panel panel>
            <div className="car-prop">{key}</div>
            {value && <div className="value">{value}</div>}
        </Block.Panel>
    )
}

function CarDetailsScreen(props) {
    return (
        <Screen>
            <Block>
                <Block.Panel label={texts.mileage} value={car.mileage}></Block.Panel>
            </Block>

            <Block.Label>{texts.SERVICE}</Block.Label>
            <Block>
                <Block.Panel label={texts.serviceGBO} value={car.serviceGBO}></Block.Panel>
                <Block.Panel label={texts.engineOil} value={car.engineOil}></Block.Panel>
                <Block.Panel label={texts.candles} value={car.candles}></Block.Panel>
                <Block.Panel label={texts.boxOil} value={car.boxOil}></Block.Panel>
                <Block.Panel label={texts.valveAdjustment} value={car.valveAdjustment}></Block.Panel>
                <Block.Panel label={texts.gearboxGBO} value={car.gearboxGBO}></Block.Panel>
            </Block>

            <Block.Label>{texts.INSURANCE}</Block.Label>
            <Block>
                <Block.Panel label={texts.insuranceOSAGO} value={car.insuranceOSAGO}></Block.Panel>
                <Block.Panel label={texts.insuranceKASKO} value={car.insuranceKASKO}></Block.Panel>
            </Block>
        </Screen>
    )
}

export default CarDetailsScreen;