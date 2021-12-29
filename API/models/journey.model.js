const mongoose = require('mongoose')
const { Schema } = mongoose
// const imageSchema = require('./image.model')

const journeySchema = new Schema({
    title:String,
    date:String,
    locationName:String,
    //used for Google Maps API
    locationLongLat:String,
    images:[String],
    body:String
},{collection:"journey"})

const Journey = mongoose.model('journies', journeySchema)

module.exports = Journey
