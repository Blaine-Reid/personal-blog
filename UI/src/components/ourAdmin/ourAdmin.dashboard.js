import React, { Component } from 'react'
import FormOurJourney from './ourAdmin.form.ourJourney'
import FormOurFriends from './ourAdmin.form.ourFriends'
import FormOurFamily from './ourAdmin.form.ourFamily'
import FormOurStore from './ourAdmin.form.ourStore'
import FormOurLanding from './ourAdmin.form.ourLanding'
import DocumentTile from './ourAdmin.documentTile'
import Loader from '../Misc/Loading'

import ConfirmDelete from './ourAdmin.confirmDeletePost'

export default
  class AdminLoggedOn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      deletePost: false,
    
      selectedPostId: ''
    }

    this.openConfirmDelete = this.openConfirmDelete.bind(this)
    this.cancelDelete = this.cancelDelete.bind(this)

  }

  // cancelDelete
  cancelDelete() {
    this.setState({
      deletePost: false,
      selectedPostId: ''
    })
  }

  //DeletePost
  //used to get form data and use as values in forms
  openConfirmDelete(id) {

    this.setState({
      deletePost: true,
      selectedPostId: id
    })

  }

  render() {
    //confirm delete modal display
    let confirmDelete = this.state.deletePost
      ? <ConfirmDelete
        deleteDocument={this.props.deleteDocument}
        id={this.state.selectedPostId}
        cancelDelete={this.cancelDelete}
        toggleUpdatePost={this.props.toggleUpdatePost}
        updatePost={this.props.updatePost}
        updatePostObject={this.props.updatePostObject}
      />
      : null

    //Display different forms depending on user's selection
    // for element id="form-select"
    let formToDisplay = this.props.displayForm === 'ourJourney'
      ? <FormOurJourney
        fileData={this.props.fileData}
        images={this.props.images}
        deleteImage={this.props.deleteImage}
        submitForm={this.props.submitForm}
        toggleUpdatePost={this.props.toggleUpdatePost}
        updatePost={this.props.updatePost}
        updatePostObject={this.props.updatePostObject}


      />
      : this.props.displayForm === 'ourFamily'
        ? <FormOurFamily
          fileData={this.props.fileData}
          images={this.props.images}
          deleteImage={this.props.deleteImage}
          submitForm={this.props.submitForm}
          toggleUpdatePost={this.props.toggleUpdatePost}
          updatePost={this.props.updatePost}
          updatePostObject={this.props.updatePostObject}


        />
        : this.props.displayForm === 'ourFriends'
          ? <FormOurFriends
            fileData={this.props.fileData}
            images={this.props.images}
            deleteImage={this.props.deleteImage}
            submitForm={this.props.submitForm}
            toggleUpdatePost={this.props.toggleUpdatePost}
            updatePost={this.props.updatePost}
            updatePostObject={this.props.updatePostObject}

          />
          : this.props.displayForm === 'ourLanding'
            ? <FormOurLanding
              fileData={this.props.fileData}
              images={this.props.images}
              deleteImage={this.props.deleteImage}
              submitForm={this.props.submitForm}
              toggleUpdatePost={this.props.toggleUpdatePost}
              updatePost={this.props.updatePost}
              updatePostObject={this.props.updatePostObject}
            />
            : <FormOurStore
              fileData={this.props.fileData}
              images={this.props.images}
              deleteImage={this.props.deleteImage}
              submitForm={this.props.submitForm}
              toggleUpdatePost={this.props.toggleUpdatePost}
              updatePost={this.props.updatePost}
              updatePostObject={this.props.updatePostObject}
            />

    //if there are this.props.documents
    //then map over them and create DocumentTiles to display

    let documentsToDisplay = this.props.documents.length > 0
      ? this.props.documents.map((document, index) => {
        console.log(document._id)
        return <DocumentTile
          index={index}
          id={document._id}
          setImages={this.props.setImages}
          openConfirmDelete={this.openConfirmDelete}
          title={document.title}
          date={document.date}
          images={document.images}
          body={document.body}
          key={document._id}
          toggleUpdatePost={this.props.toggleUpdatePost}
          updatePost={this.props.updatePost}
          updatePostObject={this.props.updatePostObject}
        />
      })
      : <Loader />

    return (
      <div id="loggedOn" className='w3-cell w3-cell-middle'>
        {confirmDelete}
        {/* DASHBOARD HEADER */}
        <div className="w3-container dark-green w3-center">
          <h3 className="w3-xxlarge">
            Administrator Dashboard
        </h3>
        </div>

        {/* DASHBOARD TEXT */}
        <div className="w3-container w3-justify">
          <p className='w3-xlarge'>
            Welcome to your admin dashboard. Here you can create, update and delete content on your blog by using the simple form below.
        </p>
          <p className='w3-xlarge w3-padding'>
            <strong>Questions?</strong> Hover over input or item to see tool tips.
        </p>
        </div>

        {/* DASHBOARD FORM*/}
        <div className=" w3-justify border">
          {/* SELECT PAGE */}
          <div className="w3-container w3-center w3-light-green">

            <label className="w3-xlarge">
              Page to Modify
          </label>

            <select
              id="form-select"
              className="w3-input w3-margin-top w3-margin-bottom w3-xlarge"
              onChange={this.props.toggleDisplayForm}
            >
              <option value="ourLanding">Our Landing Page</option>
              <option value="ourJourney">Our Journey Page</option>
              <option value="ourFamily">Our Family Page</option>
              <option value="ourFriends">Our Friends Page</option>
              <option value="ourStore">Our Store Page</option>
            </select>

          </div>
          {/* DISPLAY SELECTED PAGE FORM AND ELEMENTS */}

          <div className="w3-cell-row">
            {/* FORM */}
            <div id="left-display" className="w3-container w3-light-green w3-cell w3-mobile">
              {formToDisplay}

            </div>

            {/* DISPLAY ELEMENTS HERE */}
            <div id="right-display" className="w3-container w3-cell w3-mobile" style={{ backgroundColor: '#e0e0e0' }}>
              <h4 className="w3-xlarge w3-center dark-green">
                Page Elements
            </h4>

              {/* LOADER ANIMATION and FADE TO DISPLAY DOCUMENTS */}
              <div >
                {documentsToDisplay}
              </div>
            </div>

          </div>

        </div>

      </div>
    )

  }
}