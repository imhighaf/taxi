import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import texts from '../../constants/translations';
import Screen from '../Screen'
import Block from '../BlockItem';
//import './style.scss';
const car = {
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

function CarDetailsScreen(props) {
    return (
        <Screen>
            <Block>
                <Block.Item label={texts.mileage} value={car.mileage}></Block.Item>
            </Block>

            <Block.Label>{texts.SERVICE}</Block.Label>
            <Block>
                <Block.Item label={texts.serviceGBO} value={car.serviceGBO}></Block.Item>
                <Block.Item label={texts.engineOil} value={car.engineOil}></Block.Item>
                <Block.Item label={texts.candles} value={car.candles}></Block.Item>
                <Block.Item label={texts.boxOil} value={car.boxOil}></Block.Item>
                <Block.Item label={texts.valveAdjustment} value={car.valveAdjustment}></Block.Item>
                <Block.Item label={texts.gearboxGBO} value={car.gearboxGBO}></Block.Item>
            </Block>

            <Block.Label>{texts.INSURANCE}</Block.Label>
            <Block>
                <Block.Item label={texts.insuranceOSAGO} value={car.insuranceOSAGO}></Block.Item>
                <Block.Item label={texts.insuranceKASKO} value={car.insuranceKASKO}></Block.Item>
            </Block>


            <Block.Label>{texts.INSURANCE}</Block.Label>
            <Block>
                <Block.Item label={texts.serviceGBO} value={car.serviceGBO}></Block.Item>
                <Block.Item label={texts.engineOil} value={car.engineOil}></Block.Item>
                <Block.Item label={texts.candles} value={car.candles}></Block.Item>
                <Block.Item label={texts.boxOil} value={car.boxOil}></Block.Item>
                <Block.Item label={texts.valveAdjustment} value={car.valveAdjustment}></Block.Item>
                <Block.Item label={texts.gearboxGBO} value={car.gearboxGBO}></Block.Item>
            </Block>
            <Block.Label>{texts.INSURANCE}</Block.Label>
            <Block>
                <Block.Item label={texts.serviceGBO} value={car.serviceGBO}></Block.Item>
                <Block.Item label={texts.engineOil} value={car.engineOil}></Block.Item>
                <Block.Item label={texts.candles} value={car.candles}></Block.Item>
                <Block.Item label={texts.boxOil} value={car.boxOil}></Block.Item>
                <Block.Item label={texts.valveAdjustment} value={car.valveAdjustment}></Block.Item>
                <Block.Item label={texts.gearboxGBO} value={car.gearboxGBO}></Block.Item>
            </Block>
            <Block.Label>{texts.INSURANCE}</Block.Label>
            <Block>
                <Block.Item label={texts.serviceGBO} value={car.serviceGBO}></Block.Item>
                <Block.Item label={texts.engineOil} value={car.engineOil}></Block.Item>
                <Block.Item label={texts.candles} value={car.candles}></Block.Item>
                <Block.Item label={texts.boxOil} value={car.boxOil}></Block.Item>
                <Block.Item label={texts.valveAdjustment} value={car.valveAdjustment}></Block.Item>
                <Block.Item label={texts.gearboxGBO} value={car.gearboxGBO}></Block.Item>
            </Block>
        </Screen>
    )
}

export default CarDetailsScreen;