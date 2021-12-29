const mongoose = require('mongoose')
const { Schema } = mongoose

const friendSchema = new Schema({
  title: String,
  images: [String],
  body: String,
  link:String

},{collection:'friends'})

const Friend = mongoose.model('friends', friendSchema)

module.exports = Friend