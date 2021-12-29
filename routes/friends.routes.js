//requirements
const express = require('express')
const router = express.Router()
const Friend = require('../models/friends.model')

// ourFriends Routes----------------------------------------------------------------
router.route("/")
  .get((req, res) => {

    Friend.find({})
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