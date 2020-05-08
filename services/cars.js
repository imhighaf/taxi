const mongoose = require('mongoose');
require('../models/Car');
const Cars = mongoose.model('cars');

const getAll = async () => await Cars.find().exec();


module.exports = {
    getAll
}