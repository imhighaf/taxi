import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import texts from '../../constants/translations';
import Screen from '../Screen'
import Block from '../BlockItem';
import {TitleBar} from '../Layout';
//import './style.scss';

function renderCarProperty(key, value) {
    return (
        <Block.Panel panel>
            <div className="car-prop">{key}</div>
            {value && <div className="value">{value}</div>}
        </Block.Panel>
    )
}

function CarDetailsScreen(props) {
    const car = props.carList.find(car => {
        return props.match.params.id === car.id.toLowerCase();
    });
    const title = `${car.brand} ${car.model}`
    return (
        <Screen>
            <TitleBar title={title} sub={car.id}/>
            <Block>
                <Block.Panel label={texts.mileage} value={car.mileage}></Block.Panel>
            </Block>

            <Block.Label>{texts.SERVICE}</Block.Label>
            <Block>
                <Block.Panel label={texts.serviceLPG} value={car.serviceLPG}></Block.Panel>
                <Block.Panel label={texts.serviceOilEngine} value={car.serviceOilEngine}></Block.Panel>
                <Block.Panel label={texts.serviceSparkPlug} value={car.serviceSparkPlug}></Block.Panel>
                <Block.Panel label={texts.serviceOilGears} value={car.serviceOilGears}></Block.Panel>
                <Block.Panel label={texts.serviceValve} value={car.serviceValve}></Block.Panel>
                <Block.Panel label={texts.serviceLPG} value={car.serviceLPG}></Block.Panel>
            </Block>

            <Block.Label>{texts.INSURANCE}</Block.Label>
            <Block>
                <Block.Panel label={texts.insuranceOSAGO} value={car.insuranceOSAGO}></Block.Panel>
                <Block.Panel label={texts.insuranceKASKO} value={car.insuranceKASKO}></Block.Panel>
            </Block>
        </Screen>
    )
}

function mapStateToProps({ cars }) {
    return { carList: cars.carList }
}
export default withRouter(
    connect(mapStateToProps)(CarDetailsScreen)
);