import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import texts from '../../constants/translations';
import Screen from '../Screen'
import CarList from '../CarList';
import { TitleBar } from '../Layout';

import * as actions from '../../actions';
import cars from './cars';
//import './style.scss';

class ShiftsScreen extends Component {
    async componentDidMount () {
        await this.props.fetchCars()
    }

    handleClickcar = (car) => {
        const id = car.id.toLowerCase();
        const path = `/car/${id}`;
        this.props.history.push(path);
    }
    render() {
        const {carList} = this.props.cars;
        if (!carList) return null;
        console.log(this.props.cars)
        return (
            <Screen>
                <TitleBar title={texts.CARS}></TitleBar>
                <CarList
                    cars={carList}
                    onClickItem={this.handleClickcar}
                ></CarList>
            </Screen>
        )
    }

}

function mapStateToProps({cars}) {
    return { cars }
}

export default connect(mapStateToProps, actions)(ShiftsScreen);