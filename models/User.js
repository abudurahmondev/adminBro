const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: String,
    age: {type: Number, min: 15},
    region: String
})

module.exports = mongoose.model('User', UserSchema)