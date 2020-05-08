import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Board } from '../Layout';
import Icon from '../Icon';
import info from './info.svg';
import './style.scss';

//const warningIcon = import (./)
//const errIcon = import(../)

import { capitalize } from '../../utils';

function findBehindHandService(car) {
    return car.service.find(serv => serv.next <= car.mileage);
}

function findWarningService(car) {
    return car.service.find(serv => serv.next - car.mileage <= serv.alert)
}
//TODO: same for insurance

const setWarningIcon =  (car)=>  {
    if (findBehindHandService(car)){
        return 'errIcon';
    }
    if (findWarningService(car)) {
        return 'warningIcon';
    }
    return;
}


function CarList(props) {
    const { cars, onClickItem } = props;
    return (
        <div className="cars-list">
            {cars.map(car => {

                const title = `${capitalize(car.brand)} ${capitalize(car.model)}`

                return (
                    <Board
                        key={car.id}
                        title={title}
                        sub={car.id}
                        warningIcon={setWarningIcon(car)}
                        actionIcon={<Icon.Right />}
                        item={car}
                        action={onClickItem}
                    />
                )
            })}
        </div>
    )
}

export default CarList;