const express = require('express')
const route = express.Router()

const Restaurants = require('../models/Restaurant.js')

const neighborhoods = require('../models/neighborhoods')

//////////////////////////////// * Rutas Principales * ///////////////////////////////////
route.get('/', async (req, res, next) => {
    try {
        const restaurants = await Restaurants.find().limit(100)
        res.render('index', {Neibor: restaurants})
    }catch(err){ console.log(err) }
    
});
route.get('/barrios', async (req, res, next) => {
    try {
        const restaurants = await neighborhoods.find().limit(100)
        res.render('barrios', {Neibor: restaurants})
    }catch(err){ console.log(err) }
    
});





module.exports = route