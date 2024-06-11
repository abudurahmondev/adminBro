const mongoose = require('mongoose')
const uri = 'mongodb://localhost/adminka'
mongoose.connect(uri)
const conexion = mongoose.connection

module.exports = conexion