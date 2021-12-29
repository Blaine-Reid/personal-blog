//requirements
const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const urlParser = require('url-parse')

//Models
const Store = require('../models/store.model')
const Family = require('../models/family.model')
const Friend = require('../models/friends.model')
const Journey = require('../models/journey.model')
const User = require('../models/users.model')
const Landing = require('../models/landing.model')

//LOGIN
router.route('/login')
  .post((req, res) => {

    //destructure variables from body
    let { data: { username, psw } } = req.body

    User.findOne({ username })
      .then(user => {

        //if response isn't NULL
        if (user) {
          bcrypt.compare(psw, user.psw, (err, result) => {
            //if password matches
            if (result) {
              res.json({ response: true })

              //if password DOESN't match
            } else {
              res.json({ response: false, message: "Incorrect Password" })
            }
          })
          //if no matching user
        } else {
          res.json({ response: false, message: "Incorrect Username" })
        }
      })
  })

//UPDATE ADMIN INFO
router.route('/updateAdmin')
  .put((req, res) => {
    let { username, psw } = req.body


    User.findOne({})
      .then(admin => {
        admin.username = username
        admin.psw = bcrypt.hashSync(psw, 12)

        admin.save()
          .then(update => {
            res.json({ response: true, message: 'Updated Admin' })
          }).catch(err => {
            res.json({ response: false, message: 'Failed to Update Admin' })
          })

      }).catch(err => console.log(err))
  })

// ourJourney Routes----------------------------------------------------------------
router.route("/ourJourney")
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

  }).post((req, res) => {

    let newJourneyPost = new Journey(req.body)

    newJourneyPost.save()
      .then(saved => {

        Journey.find({})
          .then(newElements => {
            res.json({ response: true, data: newElements })
          })

      }).catch(err => console.log(err))

  })

//delete posts from /ourJourney
router.route("/ourJourney/deletePost").delete((req, res) => {
  //use urlParse to parse query from url
  let { query: { postID } } = urlParser(req.url, true)

  //delete post using posts _id
  Journey.deleteOne({ _id: postID })
    .then(response => {


      Journey.find({})
        .then(updated => {
          res.json({ response: true, data: updated })
        }).catch(err => {

          res.json({
            title: '',
            date: '',
            locationName: '',
            //used for Google Maps API
            locationLongLat: '',
            images: [],
            body: ''
          })
        })
    })
})


//update posts from /ourJourney
router.route("/ourJourney/updatePost").put((req, res) => {
  //use urlParse to parse query from url
  let { query: { post } } = urlParser(req.url, true)
  let update = req.body


  //delete post using posts _id
  Journey.updateOne({ _id: post }, update)
    .then(response => {
      res.json({ response: true, data: response })

    }).catch(err => console.log(err))
})



// ourStore Routes--------------------------------------------------------------------
router.route("/ourStore")
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
  .post((req, res) => {

    let newStoreItem = new Store(req.body)

    newStoreItem.save()
      .then(saved => {

        Store.find({})
          .then(newElements => {
            res.json({ response: true, data: newElements })
          })

      }).catch(err => console.log(err))

  })

//delete posts from /ourStore
router.route("/ourStore/deletePost").delete((req, res) => {
  //use urlParse to parse query from url
  let { query: { postID } } = urlParser(req.url, true)

  //delete post using posts _id
  Store.deleteOne({ _id: postID })
    .then(response => {

      Store.find({})
        .then(updated => {
          res.json({ response: true, data: updated })
        }).catch(err => {

          res.json({
            title: '',
            link: '',
            body: '',
            price: '',
            images: []
          })
        })
    })
})



//update posts from /ourStore
router.route("/ourStore/updatePost").put((req, res) => {
  //use urlParse to parse query from url
  let { query: { post } } = urlParser(req.url, true)
  let update = req.body


  //delete post using posts _id
  Store.updateOne({ _id: post }, update)
    .then(response => {
      res.json({ response: true, data: response })

    }).catch(err => console.log(err))
})


// ourFamily Routes----------------------------------------------------------------
router.route("/ourFamily")
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
  .post((req, res) => {

    let newFamilyMemeber = new Family(req.body)

    newFamilyMemeber.save()
      .then(saved => {

        Family.find({})
          .then(newElements => {
            res.json({ response: true, data: newElements })
          })

      }).catch(err => console.log(err))

  })


//delete posts from /ourFamily
router.route("/ourFamily/deletePost").delete((req, res) => {
  //use urlParse to parse query from url
  let { query: { postID } } = urlParser(req.url, true)
  console.log('in family')
  //delete post using posts _id
  Family.deleteOne({ _id: postID })
    .then(response => {

      Family.find({})
        .then(updated => {
          res.json({ response: true, data: updated })
        }).catch(err => {

          res.json({
            title: '',
            images: null,
            body: ''
          })
        })
    })
})

//update posts from /ourFamily
router.route("/ourFamily/updatePost").put((req, res) => {
  //use urlParse to parse query from url
  let { query: { post } } = urlParser(req.url, true)
  let update = req.body

  //delete post using posts _id
  Family.updateOne({ _id: post }, update)
    .then(response => {
      res.json({ response: true, data: response })

    }).catch(err => console.log(err))
})

// ourFriends Routes------------------------------------------------------------------
router.route("/ourFriends")
  .get((req, res) => {

    Friend.find({})
      .then(respond => {
        res.json({
          response: true,
          data: respond
        })

      }).catch(err => {
        console.log(err)
  
      })

  })
  .post((req, res) => {

    let newFriend = new Friend(req.body)

    newFriend.save()
      .then(saved => {

        Friend.find({})
          .then(newElements => {
            res.json({ response: true, data: newElements })
          })

      }).catch(err => console.log(err, 'post in friends'))

  })


//delete posts from /ourFriends
router.route("/ourFriends/deletePost").delete((req, res) => {
  //use urlParse to parse query from url
  let { query: { postID } } = urlParser(req.url, true)

  //delete post using posts _id
  Friend.deleteOne({ _id: postID })
    .then(response => {

      Friend.find({})
        .then(updated => {
          res.json({ response: true, data: updated })
        }).catch(err => {

          console.log(err)
        })
    })
})


//update posts from /ourFriends
router.route("/ourFriends/updatePost").put((req, res) => {
  //use urlParse to parse query from url
  let { query: { post } } = urlParser(req.url, true)
  let update = req.body


  //delete post using posts _id
  Friend.updateOne({ _id: post }, update)
    .then(response => {
      res.json({ response: true, data: response })

    })
})

// ourLanding Routes------------------------------------------------------------------
router.route("/ourLanding")
  .get((req, res) => {

    //only one landing page post allowed
    Landing.find({})
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
  .post((req, res) => {

    let newLanding = new Landing(req.body)
    //deletes previous input
    Landing.deleteMany({})
      .then(deleted => {
      }).catch(err=> console.log(err, 'IN POST for ourLanding'))

    newLanding.save()
      .then(saved => {
        res.json({ response: true, data: [saved] })
      }).catch(err => console.log(err, 'IN POST for saving in ourLanding'))


  })


//delete posts from /ourLanding
router.route("/ourLanding/deletePost").delete((req, res) => {
  //use urlParse to parse query from url
  let { query: { postID } } = urlParser(req.url, true)

  //delete post using posts _id
  Landing.deleteOne({ _id: postID })
    .then(response => {

      Landing.find({})
        .then(updated => {
          res.json({ response: true, data: updated })
        }).catch(err => {
          res.json({
            title: '',
            images: [],
            body: ''
          })
        })
    })
})


//update posts from /ourLanding
router.route("/ourLanding/updatePost").put((req, res) => {
  //use urlParse to parse query from url
  let { query: { post } } = urlParser(req.url, true)
  let update = req.body


  //delete post using posts _id
  Landing.updateOne({ _id: post }, update)
    .then(response => {
      res.json({ response: true, data: response })

    }).catch(err => console.log(err))
})


module.exports = router
