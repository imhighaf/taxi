const CarService = require('../services/cars');

const getAll = async (req, res) => {
    const cars = await CarService.getAll();
    console.log(cars)
    res.send(cars);
}

module.exports = {
    getAll
}