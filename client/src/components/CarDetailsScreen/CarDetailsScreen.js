import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import texts from '../../constants/translations';
import Screen from '../Screen'
import { TitleBar, Board } from '../Layout';
import Icon from '../Icon';
import { capitalize } from '../../utils';
//import './style.scss';
import warningIcon from '../../icons/warning.png';
import errorIcon from '../../icons/error.png';

function isMissedService(service, car) {
    return service.next <= car.mileage ? errorIcon : null;
}

function isUpcomingService(service, car) {
    const { next, alert } = service;
    return next - car.mileage <= alert ? warningIcon : null;
}



function CarDetailsScreen(props) {
    const car = props.carList.find(car => {
        console.log(car)
        return props.match.params.id === car.id.toLowerCase();
    });
    const title = `${capitalize(car.brand)} ${capitalize(car.model)}`
    return (
        <Screen>
            <TitleBar title={title} sub={car.id} />
            <Board title={texts.mileage} value={car.mileage} />

            <TitleBar title={texts.SERVICE} />
            {car.service.map(service => {
                return (
                    <Board key={service._id}
                        title={capitalize(service.title)}
                        actionIcon={<Icon.Right />}
                        warningIcon={isMissedService(service, car) || isUpcomingService(service, car)}
                        sub={`Следующий сервис ${service.next}`}
                    ></Board>
                )
            })}
        </Screen>
    )
}

function mapStateToProps({ cars }) {
    return { carList: cars.carList }
}
export default withRouter(
    connect(mapStateToProps)(CarDetailsScreen)
);