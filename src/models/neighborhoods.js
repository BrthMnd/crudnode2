const mongoose = require('../data/Databases.js');
const Schema = require('mongoose').Schema;

const neighborhoodShema = new Schema({
          name: String,
});
        
const neighborhoods = mongoose.model('neighborhoods', neighborhoodShema);
        
module.exports = neighborhoods;
        
        
        
