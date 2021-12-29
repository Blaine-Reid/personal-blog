//requirements
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

//models
const Family = require('../models/family.model')
const Friends = require('../models/friends.model')
const Journey = require('../models/journey.model')
const Store = require('../models/store.model')
const User = require('../models/users.model')

//variables
const mongoUri = 'mongodb://127.0.0.1:27017/capstone'
const mongoOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

const connectDb = async () => {
  try {
    await mongoose.connect(mongoUri,mongoOptions)
  } catch (error) {
    console.log(error.message)
  }
}

connectDb()
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});


//CLEARE DATABASE
try {
  User.deleteMany({}).then(() => console.log('delete all'))

} catch(err){
  handleError(err);
}



//create a hashed password and then save user info to DB
bcrypt.hash('Admin', 12, (err, hash) => {
  /*Store hash in your db*/

  //USER Object
  let Super = {
    username: 'Admin',
    psw: hash,
    admin: true
  }

  //Create new instance of User and passing in new user object
  let Admin = new User(Super)

  //save the instance into database
  Admin.save()
    .then(user => console.log("USERS CREATED: ", user))
    .catch(err => console.log(err))

})


//set timeout to close database
setTimeout(() => {

  db.close(() => {
    console.log("Closed for seeding")
  })

}, 2000)