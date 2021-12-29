const mongoose = require('mongoose')
const { Schema } = mongoose


const landingSchema = new Schema({
  title: String,
  images: [String],
  body: String
}, { collection: "landing" })

const Landing = mongoose.model('landing', landingSchema)

module.exports = Landing