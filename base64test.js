const fs = require('fs');
const mongoose = require('mongoose')
const { Schema } = mongoose
const express = require('express')
const app = express()

const uri = 'mongodb://localhost:27017/test';
const opts = {
  useUnifiedTopology: true,//false by default. Set to true to make all connections set the useUnifiedTopology option by default
  useNewUrlParser: true,//false by default. Set to true to make all connections set the useNewUrlParser option by default
  useCreateIndex: true, //false by default. Set to true to make Mongoose's default index build use createIndex() instead of ensureIndex() to avoid deprecation warnings from the MongoDB driver.
  useFindAndModify: false, // true by default. Set to false to make findOneAndUpdate() and findOneAndRemove() use native findOneAndUpdate() rather than findAndModify().
};

//mongoose Promise constructor
mongoose.Promise = global.Promise;

//create schema
const albumSchema = new Schema({
  name: String,
  image: Buffer //used for Base64 encoded files
});

//mount model to collection
const Album = mongoose.model('Album', albumSchema);

mongoose.connect(uri, opts);

let db = mongoose.connection

db.once('open', () => {
  console.log("CONNECTED TO DB")
})

Promise.all(
  // create array of models mounted to connection and map over them
  // grab the model name and delete all documents out of them
  Object.entries(db.models).map(([k, m]) => m.deleteMany())
)

//read a image file
fs.readFile('./globe.png', (err, data) => {

  // Convert to Base64 and print out a bit to show it's a string
  let base64 = data.toString('base64');
  console.log(base64.substr(0, 500));
  let bytes = Buffer.byteLength(base64)

  // Feed out string to a buffer and then put it in the database
  let image = Buffer.alloc(bytes, base64, "base64");

  //create new instance of Schema
  Album.create({ "name": "globe", "image": image });

  // Get from the database
  //use set time out to give DB time to save document to collection
  //TURN INTO ASYNC/AWAIT TO CUT OUT setTIMEOUT

  setTimeout(() => {
    Album.findOne({ name: 'globe' })
      .then(response => {

        // Show the data record and write out to a new file.
        fs.writeFile('mynewfile3.png', response.image, (err) => {
          if (err) throw err;
          console.log('Saved!');
        });
      });
  }, 3000)


});

app.get('/',(req,res)=>{
  Album.findOne({ name: 'globe' })
    .then(response => {
//write image to screen
      // res.json({image:response.image})
      res.write(response.image)



})
})
app.listen(8000,()=>{
  console.log('connected')
})
// IIFE function
// (async function () {
  //try
  // try {


    // await Promise.all(
      //create array of models mounted to connection and map over them
      //grab the model name and delete all documents out of them
      // Object.entries(conn.models).map(([k, m]) => m.deleteMany())
    // )

    // //read a image file
    // fs.readFile('./globe.png', (err, data) => {

    //   // Convert to Base64 and print out a bit to show it's a string
    //   let base64 = data.toString('base64');
    //   console.log(base64.substr(0, 500));

    //   // Feed out string to a buffer and then put it in the database
    //   let image = Buffer.alloc(1024, base64, "base64");
    //   Album.create({ "title": "globe", "image": image });

    //   // Get from the database
    //   // - for demo, we could have just used the return from the create() instead
    //   Album.findOne({ title: 'globe' })
    //     .then(response => {

    //       // Show the data record and write out to a new file.
    //       console.log(album);
    //       fs.writeFile('./output.png', response.image)
    //     });

    // });

  // } catch (e) {
  //   console.error(e);
  // } finally {
  //   mongoose.disconnect()
  // }

// })()