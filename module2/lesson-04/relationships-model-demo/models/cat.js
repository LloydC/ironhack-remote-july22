const mongoose = require('mongoose')
const Schema = mongoose.Schema

const message = new Schema({
    title: String,
    body: String
})

const catSchema = new Schema({
    name: String,
    age: Number,
    bio: String,
    dateOfBirth: Date,
    foods: [{type: Schema.Types.ObjectId, ref: 'Food'}],
    message: message
})

const Cat = mongoose.model('Cat', catSchema)

module.exports = Cat