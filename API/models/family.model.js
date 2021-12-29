const mongoose = require('mongoose')
const { Schema } = mongoose
// const imageSchema = require('./image.model')

const familySchema = new Schema({
  title: String,
  images: [String],
  body: String
},{collection:"family"})

const Family = mongoose.model('family', familySchema)

module.exports = Family
