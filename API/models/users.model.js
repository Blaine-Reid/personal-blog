const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
  username: {
    type: String,
    require: true,
    trim: true
  },
  psw: {
    type: String,
    require: true,
    trim: true
  },
  admin:{
    type:Boolean,
    require:true
  },
  updatedPW:{
    type: Boolean,
    require: true
  }
})

const User = mongoose.model('users', userSchema)

module.exports = User
