// * MONGOOSE CONEXION 

const mongoose = require('mongoose');

// ! No colocar "require" para la uri.
const uri = `mongodb+srv://${process.env.USER_ADMIN}:${process.env.PASSWORD}@cluster0.nsvkq9w.mongodb.net/${process.env.DB}?retryWrites=true&w=majority`

const conexion = mongoose.createConnection(uri)

module.exports = conexion