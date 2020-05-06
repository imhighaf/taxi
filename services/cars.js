const db = require('../db');

const getAll = async () => {
   const sheet = await db.getSheet('cars')
   return await db.getRows(sheet);
}

module.exports = {
    getAll
}