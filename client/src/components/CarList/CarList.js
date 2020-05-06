import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Board } from '../Layout';
import Icon from '../Icon';
import info from './info.svg';
import './style.scss';


function CarList(props) {
    const { cars, onClickItem } = props;
    return (
        <div className="cars-list">
            {cars.map(car => {
                const title = `${car.brand} ${car.model}`
                return (
                    <Board
                        key={car.id}
                        title={title}
                        sub={car.id}
                        icon={<Icon.Right />}
                        item={car}
                        onClickItem={onClickItem}
                    />
                )
            })}
        </div>
    )
}

export default CarList;