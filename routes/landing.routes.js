//requirements
const express = require('express')
const router = express.Router()
// model
const Landing = require('../models/landing.model')

router.route('/')
  .get((req, res) => {

    Landing.find({})
      .then(documents => {
        res.json({ response: true, data: documents })
      }).catch(err => console.log(err))

  })



module.exports = router