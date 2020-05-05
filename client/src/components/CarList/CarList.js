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
                return (
                    <Board
                        key={car.no}
                        title={car.model}
                        sub={car.no}
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