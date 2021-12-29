//requirements
const express = require('express')
const router = express.Router()
const Family = require('../models/family.model')

// ourFamily Routes----------------------------------------------------------------
router.route("/")
  .get((req, res) => {

    Family.find({})
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