const mongoose = require('mongoose')
const {Schema} = mongoose

const imageSchema = new Schema({
  name:String,
  location:String,
  description:String,
  src:String,
  alt:String,
})


module.exports = imageSchema