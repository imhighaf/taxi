const CarService = require('../services/cars');

const getAll = async (req, res) => {
    const cars = await CarService.getAll();
    res.send(cars);
}

module.exports = {
    getAll
}