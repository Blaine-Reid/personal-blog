import './App.css';
import './AppMediaQuery.css';
import React, { Component } from 'react';
import axios from 'axios'
import { Switch, Route } from 'react-router-dom'

import OurFamily from './components/ourFamily/ourFamily.main'
import OurFriends from './components/ourFriends/ourFriends.main'
import OurJourney from './components/ourJourney/ourJourney.main'
import Post from './components/ourJourney/ourJourney.post'
import OurStore from './components/ourStore/ourStore.main'
import OurAdmin from './components/ourAdmin/ourAdmin.main'
import LandingPage from './components/landingPage/landingPage.main'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Nonexistant from './components/Misc/Nonexistant'


export default
  class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      displayingPage: 'ourLanding',
      displayPosts: [],
      selectedPost: '',
      redirect: null,
      message: ''
    }
    this.changePage = this.changePage.bind(this)
    this.selectPost = this.selectPost.bind(this)

  }

componentDidMount(){
  this.changePage(this.state.displayingPage)
}

  //used to change pages from NavBar
  async changePage(page) {

    //set await to require updating of state before calling axios call
    await this.setState({
      displayingPage: page
    })


    let url = `http://localhost:8000/${this.state.displayingPage}/`

    axios.get(url)
      .then(response => {
        let posts = response.data.data || []

        this.setState({
          displayPosts: posts
        })

      }).catch(err => {
        this.setState({
          message: 'Site being updated. Please return shortly'
        })
      })
  }

  //used to click on post to display full post
  selectPost(id) {
    let post = this.state.displayPosts.filter(post => post._id === id)[0]
    this.setState({
      selectedPost: post
    })
  }



  render() {



    return (
      <div className="App" >
        <Navbar
          changePage={this.changePage}
        />
        <div id="main-content" className="w3-row ">
          {/* {redirect} */}
          <Switch>

            <Route exact path="/">
              <LandingPage 
                //posts pulled from DB
                displayPosts={this.state.displayPosts}
                />
            </Route>

            <Route exact path="/ourJourney">
              <OurJourney
                //posts pulled from DB
                displayPosts={this.state.displayPosts}
                //error messages
                message={this.state.message}
                //func to select post to view full post
                selectPost={this.selectPost}
              />
            </Route>

            <Route path="/ourJourney/:postTitle">
              <Post
                //error messages
                message={this.state.message}
                //selected full post
                selectedPost={this.state.selectedPost}
              />
            </Route>

            <Route path="/ourFamily">
              <OurFamily
                displayPosts={this.state.displayPosts}
                message={this.state.message}

              />
            </Route>

            <Route path="/ourFriends">
              <OurFriends
                displayPosts={this.state.displayPosts}
                message={this.state.message}

              />
            </Route>

            <Route path="/ourStore">
              <OurStore
                displayPosts={this.state.displayPosts}
                message={this.state.message}
              />
            </Route>

            <Route path="/ourAdmin">
              <OurAdmin />
            </Route>

            <Route>
              <Nonexistant />
            </Route>




          </Switch>
        </div>
        {/* <Footer /> */}
      </div>
    );
  }
}

