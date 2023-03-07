const mongoose = require('../data/Databases.js');
const Schema = require('mongoose').Schema;

const RestaurantSchema = new Schema({
    address: {
        building: String,
        coord: [{
          type: Number,
        }],
        street: String,
        zipcode: String,
      },
      borough: String,
      cuisine: String,
      grades: [{
        date: Date,
        grade: String,
        score: Number,
      }],
      name: String,
      restaurant_id: String,
    });
        
const Restau = mongoose.model('restaurants', RestaurantSchema);
        
module.exports = Restau;
        
        
        
