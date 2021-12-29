//requirements for api server
const express = require('express')  //express - serving/routing
const app = express()
const mongoose = require('mongoose') //mongoose - database
const cors = require('cors')


require('dotenv').config()          //dotenv - access .env file


//variables
const mongoURI = process.env.MONGO_URI
const mongoOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}
const apiPort = process.env.API_PORT || 8000 

//connection to database
mongoose.connect(mongoURI, mongoOptions)

//get mongoose connect and add event listener to console log connection
const db = mongoose.connection

db.once('open',()=>{
  console.log('CONNECTED TO DB')
})

//global middleware
app.use(cors()) //used to avoid CORS error REMOVE IN REAL APPLICATION
app.use(express.json({limit:'50mb'})) //used to manage json (REMOVED BECAUSE WAS LIMITING JSON SIZE)
app.use(express.urlencoded({limit:'50mb',extended:true,parameterlimit:50000})) //used to manage json (REMOVED BECAUSE WAS LIMITING JSON SIZE)


//import of routes
const adminRoutes = require('./routes/admin.routes') //admin logon and main routes
const familyRoutes = require('./routes/family.routes') //family page routes
const journeyRoutes = require('./routes/journey.routes') //journey page routes
const friendsRoutes = require('./routes/friends.routes') //friends page routes
const storeRoutes = require('./routes/store.routes') //store page routes
const landingRoutes = require('./routes/landing.routes') //store page routes

//mount routes as middleware to path
app.use('/ourAdmin',adminRoutes)
app.use('/ourFamily', familyRoutes)
app.use('/ourJourney', journeyRoutes)
app.use('/ourFriends', friendsRoutes)
app.use('/ourStore', storeRoutes)
app.use('/ourLanding', landingRoutes)

//active api server and start listening at port
setTimeout(()=>{
  app.listen(apiPort,()=>{
    console.log(`SERVER LISTENING AT PORT ${apiPort}`)
  })
},1000) //wait 1000ms to give DB time to connect



