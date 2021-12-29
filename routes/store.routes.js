//requirements
const express = require('express')
const router = express.Router()
const Store = require('../models/store.model')

// ourStore Routes----------------------------------------------------------------
router.route("/")
  .get((req, res) => {

    Store.find({})
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