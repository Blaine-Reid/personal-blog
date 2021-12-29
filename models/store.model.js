const mongoose = require('mongoose')
const { Schema } = mongoose
const imageSchema = require('./image.model')

const storeSchema = new Schema({
  title: String,
  link:String,
  body:String,
  price:String,
  images:[String]
},{collection:'store'})

const Store = mongoose.model('stores', storeSchema)

module.exports = Store