//requirements
const express = require('express')
const router = express.Router()
const Journey = require('../models/journey.model')

// ourJourney Routes----------------------------------------------------------------
router.route("/")
  .get((req, res) => {

    Journey.find({})
      .then(respond => {
        res.json({
          response: true,
          data: respond
        })

      }).catch(err => {
        res.json({
          response: false,
          message:
            "ERROR: Cannot connect to database or find documents"
        })
      })

  })

module.exports = router
