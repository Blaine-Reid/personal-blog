//required modules
import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios'

//CSS
import './ourAdmin.style.css'

//imported components
// import Loader from '../Misc/Loading'
import AdminLoggedOn from './ourAdmin.dashboard'
import AdminLogonForm from './ourAdmin.logonForm'
import UpdateAdmin from './ourAdmin.updateAdmin'

//going to be used for admin component
export default
  class OurAdmin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      adminLoggedOn: false,
      updateAdmin: false,
      loggedOut: false,
      displayForm: 'ourLanding',
      selectedDocument: '',
      documents: [],
      error: '',
      username: '',
      psw: '',
      name: '',
      images: [],
      updatePost: false,
      updatePostObject: {},
      updateIndex: null
    }

    this.logon = this.logon.bind(this)
    this.logout = this.logout.bind(this)
    this.psw = this.psw.bind(this)
    this.username = this.username.bind(this)

    this.displayForm = this.displayForm.bind(this)
    this.getDocuments = this.getDocuments.bind(this)
    this.postDocument = this.postDocument.bind(this)
    this.updateDocument = this.updateDocument.bind(this)
    this.deleteDocument = this.deleteDocument.bind(this)
    this.deleteImage = this.deleteImage.bind(this)
    this.submitForm = this.submitForm.bind(this)

    this.fileName = this.fileName.bind(this)
    this.fileData = this.fileData.bind(this)

    this.updateState = this.updateState.bind(this)
    this.setImages = this.setImages.bind(this)
    this.toggleUpdatePost = this.toggleUpdatePost.bind(this)

    this.toggleUpdateAdmin = this.toggleUpdateAdmin.bind(this)
    this.submitUpdateAdmin = this.submitUpdateAdmin.bind(this)

  }

  //must get starting documents for form
  componentDidMount() {
    this.getDocuments()
  }

  //SET PASSWORD
  //used in 'ourAdmin.logonForm.js'
  psw(e) {
    this.setState({
      psw: e.target.value
    })
  }

  //SET USERNAME
  //used in 'ourAdmin.logonForm.js'
  username(e) {
    this.setState({
      username: e.target.value
    })
  }

  //LOG OUT OF ADMIN ACCOUNT
  //used on line 174
  logout() {
    this.setState({
      adminLoggedOn: false,
      loggedOut: true
    })

    setTimeout(() => {
      this.setState({
        loggedOut: false
      })
    }, 100);

  }

  //LOG ADMIN ON
  //used in 'ourAdmin.logonForm.js'
  logon(e) {
    //keep page from refreshing
    e.preventDefault()
    //Create User Object
    let user = {
      username: this.state.username,
      psw: this.state.psw
    }

    //Create URL to send data to API
    let url = "http://localhost:8000/ourAdmin/login"

    axios.post(url, { data: user })
      .then(response => {
        //if username/psw MATCHED
        if (response.data.response) {
          this.setState({
            adminLoggedOn: true
          })
          //if error message is recieved
        } else {
          //set state to display message
          this.setState({
            error: response.data.message
          })
          //clear message
          setTimeout(() => {
            this.setState({
              error: ''
            })
          }, 2000);

        }
      }).catch(err => console.log(err))
  }

  //fileName
  //get file name from form and setState to its value
  fileName(e) {
    this.setState({
      name: e.target.value
    })
  }

  //updateState
  //updates state to contain image converted to dataURI value as string
  updateState(image) {
    this.setState({
      images: [...this.state.images, image]
    })
  }

  //setImages
  //updates state to contain image converted to dataURI value as string
  setImages(images) {
    this.setState({
      images: images
    })
  }

  //DISPLAY FORM
  //use in 'ourAdmin.dashboard.js
  displayForm(e) {

    this.setState({
      displayForm: e.target.value,
      documents: [],
      images: [],
      updatePost: false,
      updatePostObject: {},
      updateIndex: null
    })

    setTimeout(() => {
      this.getDocuments(this.state.displayForm)
    }, 100)

  }


  //getDocuments
  //GET DATA FROM DATABASE FOR DASHBOARD DISPLAY OF ELEMENTS
  getDocuments() {
    let url = `http://localhost:8000/ourAdmin/${this.state.displayForm}`

    axios.get(url)
      .then(response => {

        this.setState({
          documents: response.data.data
        })

      }).catch(err => this.setState({
        documents: []
      }))

  }

  //deleteImage
  deleteImage(index) {

    let filteredImages = this.state.images.filter((img, i) => i !== index)

    this.setState({
      images: filteredImages
    })
  }

  //Submitting forms
  submitForm(formName, id, update) {
    let form = {
      title: '',
      date: '',
      locationName: '',
      locationLongLat: '',
      body: '',
      link: '',
      price: ''
    }

    let keys = Object.keys(form)
    //loop through keys to get data from forms
    //assign to form object
    for (let i = 0; i < keys.length; i++) {
      if (document.forms[formName][keys[i]]) {
        form[keys[i]] = document.forms[formName][keys[i]].value
      }
    }

    if (!update) {
      //Post document
      this.postDocument(form)
    } else {
      //update document
      this.updateDocument(form, id)
    }

    //Clear form
    setTimeout(() => {

      for (let i = 0; i < keys.length; i++) {
        if (document.forms[formName][keys[i]]) {
          document.forms[formName][keys[i]].value = ''
        }
      }
      document.getElementById('images').fileList = []
    }, 1000)
  }

  //updateDocument
  //PORT FORM DATA FROM DASHBOARD TO DATABASE
  postDocument(form) {
    let fullForm = Object.assign({}, form, { images: this.state.images })
    let url = `http://localhost:8000/ourAdmin/${this.state.displayForm}`

    axios.post(url, fullForm)
      .then(response => {
        //fallback coding
        let newDocuments = response.data.data !== [] ? response.data.data : []
        //clear images
        this.setState({
          documents: newDocuments,
          images: []
        })

      }).catch(err => console.log(err))

  }

  //updateDocument
  //PORT FORM DATA FROM DASHBOARD TO DATABASE
  updateDocument(form, id) {

    let fullForm = Object.assign({}, form, { images: this.state.images })
    let url = `http://localhost:8000/ourAdmin/${this.state.displayForm}/updatePost?post=${id}`

    axios.put(url, fullForm)
      .then(response => {
        //fallback coding
        let newDocuments = response.data.data !== [] ? response.data.data : []
        //clear images
        this.setState({
          documents: newDocuments,
          images: []
        })

      }).catch(err => console.log(err))

  }
  //deleteDocument
  //PORT FORM DATA FROM DASHBOARD TO DATABASE
  deleteDocument(id) {

    let url = `http://localhost:8000/ourAdmin/${this.state.displayForm}/deletePost?postID=${id}`

    axios.delete(url)
      .then(response => {
        //fallback coding
        let newDocuments = response.data.data ? response.data.data : []
        //clear images
        this.setState({
          documents: newDocuments,
          images: []
        })

      }).catch(err => console.log(err))

  }


  fileData(evt) {

    const file = evt.target.files[0]

    const reader = new FileReader();

    //set event listener on reader object to
    //send data to state once loaded
    reader.addEventListener("load", () => {
      // convert image file to base64 string
      let data = reader.result
      //pass data into state
      this.updateState(data)

    }, false);

    //if a file is loaded
    if (file) {
      //use reader method to convert to dataURL
      reader.readAsDataURL(file);
    }
  }


  //UpdatePost
  //used to get form data and use as values in forms
  toggleUpdatePost(index) {
    
    //if index doesn't match previous index, then display new document to update
    if (this.state.updateIndex !== index) {

      this.setState({
        updateIndex: index,
        updatePost: true,
        updatePostObject: this.state.documents[index],
        images: this.state.documents[index].images
      })
      //else clear documents
    } else {

      this.setState({
        updateIndex: null,
        updatePost: false,
        updatePostObject: {},
        images: []
      });

    }
  }

  toggleUpdateAdmin() {
    this.setState({
      updateAdmin: !this.state.updateAdmin
    });
  }

  submitUpdateAdmin(username, psw) {
    let url = `http://localhost:8000/ourAdmin/updateAdmin`

    let newInfo = { username, psw }

    axios.put(url, newInfo)
      .then(response => {
        if (response.data.response) {
          this.logout()
        }
      }).catch(err => console.log(err))
  }

  render() {

    // Redirect if ADMIN logs on
    let redirect = this.state.adminLoggedOn
      ? <Redirect to='/ourAdmin/dashboard' />
      //if Admin logs out, redirects to admin page
      : this.state.loggedOut
        ? <Redirect to='/ourAdmin' />
        //else does nothing
        : null

    let adminUpdate = this.state.updateAdmin
      ? <UpdateAdmin
        toggleUpdateAdmin={this.toggleUpdateAdmin}
        submitUpdateAdmin={this.submitUpdateAdmin}
      />
      : null

    return (
      <div className="w3-container w3-margin">

        {/* USE REDIRECT VARIABLE */}
        {redirect}
        {adminUpdate}
        {/* DISPLAY UPDATE USERNAME/PASSWORD BUTTON IF ADMIN IS LOGGED ON */}
        {
          this.state.adminLoggedOn
            ? <button
              class="w3-button w3-left w3-margin-top w3-xlarge w3-cyan w3-round"
              onClick={this.toggleUpdateAdmin}
            >
              Update Account
        </button>
            : null
        }
        {/* DISPLAY LOGOUT BUTTON IF ADMIN IS LOGGED ON */}
        {
          this.state.adminLoggedOn
            ? <button
              class="w3-button w3-right w3-margin-top w3-xlarge w3-black w3-round"
              onClick={this.logout}
            >
              Logout
        </button>
            : null
        }

        {/* PAGE HEADER */}
        <div className='w3-row'>
          <h1 className="page-header cursive w3-col">Our Admin</h1>
        </div>

        {/* PAGE CONTENT */}
        <div className="w3-cell-row">

          <Switch>

            {/* DISPLAY ADMIN LOG ON FORM  */}
            <Route exact path="/ourAdmin">
              <AdminLogonForm
                error={this.state.error}
                //update username in state as user types
                username={this.username}
                //update psw in state as user types
                psw={this.psw}
                //submit logon info to backend
                logon={this.logon}
              />
            </Route>

            {/* DISPLAY ADMIN DASHBOARD */}
            <Route path="/ourAdmin/dashboard">
              <AdminLoggedOn
                displayForm={this.state.displayForm}
                toggleDisplayForm={this.displayForm}
                documents={this.state.documents}
                fileData={this.fileData}
                images={this.state.images}
                deleteImage={this.deleteImage}
                submitForm={this.submitForm}

                setImages={this.setImages}
                postDocument={this.postDocument}
                deleteDocument={this.deleteDocument}
                updateDocument={this.updateDocument}
                toggleUpdatePost={this.toggleUpdatePost}
                updatePost={this.state.updatePost}
                updatePostObject={this.state.updatePostObject}
              />

            </Route>

          </Switch>

        </div>
      </div>
    );
  }
}

