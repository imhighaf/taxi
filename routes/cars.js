const express = require('express');
const router = express.Router();
const controller = require('../controllers/cars.controller');
const db = require('../db')

router.get('/', controller.getAll);


router.get('/:id', async(req, res) => {
   // await db.doc.loadInfo()
    //console.log(db.doc.title)
    res.send({ carById: 'id' })
})

module.exports = router;