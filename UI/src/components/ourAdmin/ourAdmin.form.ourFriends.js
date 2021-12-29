import React from 'react'

export default
  function FormOurFriends(props) {

  if (!props.updatePost) {
  return (
    <form name="ourFriends">

      {/* POST TITLE */}
      <label className="w3-xlarge">Title</label>
      <input
        className="w3-input w3-xlarge w3-padding"
        type="text"
        id="title"
        placeholder="Title for your post or name of friend"
        title="Please input a title to be displayed at the top of your post. This will be in a bolder, more prominent text."
        defaultValue=''
      />
      {/* POST LINK */}
      <label className="w3-xlarge">Link to Friends Site</label>
      <input
        className="w3-input w3-xlarge w3-padding"
        type="text"
        id="link"
        placeholder="OPTIONAL: Link to your friends site or store. (please include http:// or https://)"
        title="Please inputa link to your friends site to be displayed at the bottom of your post."      
        defaultValue=''
      />
      {/* IMAGES*/}
      <div className="w3-center">
        <label
          className="w3-button w3-cyan w3-round w3-margin-top w3-margin-bottom w3-xlarge"
          title="Please click to select image to add to your post. You can add multiple images by clicking the button again. Click on an image in the preview section to remove it from your post"
        >Add Images
      <input
            className="file-input"
            type="file"
            id="images"
            onChange={props.fileData}
          />
        </label>
      </div>
      {/* IMAGES - PREVIEW*/}
      <div className="w3-row w3-white slide">
        {props.images.map((image, index) => {
          return (
            <img
              key={Math.random() * index}
              className="w3-border w3-white w3-round w3-padding preview-img"
              src={image}
              alt=""
              onClick={() => props.deleteImage(index)}
            />
          )
        })}
      </div>

      {/* BODY*/}
      <label className="w3-xlarge">Friends Bio</label>
      <textarea
        className="w3-input w3-xlarge w3-padding  w3-margin-bottom"
        type="text"
        rows='15'
        id="body"
        placeholder="Friends Bio"
        title="Please input the body of text for your post about your family member. You can input links to other sites by using standard html. For example, to create a link, wrap the text that you want to create as a link in anchor tags (<a href='http://www.linkUrl.com'>Link to This Page</a>"
        defaultValue=''
      />
      {/* SUBMIT BUTTON*/}
      <div className="w3-center">
        <button
          className="w3-button w3-black w3-round w3-margin-top w3-margin-bottom w3-xlarge"
          title="Click here to submit your post"
          onClick={(e) => {
            e.preventDefault()
            props.submitForm("ourFriends",null, false)
          }}
        >Submit Post
      </button>
      </div>
    </form>

  )

  //if updating post
} else{
      return (
        <form name="ourFriends">

          {/* POST TITLE */}
          <label className="w3-xlarge">Title</label>
          <input
            className="w3-input w3-xlarge w3-padding"
            type="text"
            id="title"
            placeholder="Title for your post or name of friend"
            title="Please input a title to be displayed at the top of your post. This will be in a bolder, more prominent text."
            defaultValue={props.updatePostObject.title}
          />
          {/* POST LINK */}
          <label className="w3-xlarge">Link to Friends Site</label>
          <input
            className="w3-input w3-xlarge w3-padding"
            type="text"
            id="link"
            placeholder="OPTIONAL: Link to your friends site or store. (please include http:// or https://)"
            title="Please inputa link to your friends site to be displayed at the bottom of your post."
            defaultValue={props.updatePostObject.link}
          />
          {/* IMAGES*/}
          <div className="w3-center">
            <label
              className="w3-button w3-cyan w3-round w3-margin-top w3-margin-bottom w3-xlarge"
              title="Please click to select image to add to your post. You can add multiple images by clicking the button again. Click on an image in the preview section to remove it from your post"
            >Add Images
      <input
                className="file-input"
                type="file"
                id="images"
                onChange={props.fileData}
              />
            </label>
          </div>
          {/* IMAGES - PREVIEW*/}
          <div className="w3-row w3-white slide">
            {props.images.map((image, index) => {
              return (
                <img
                  key={Math.random() * index}
                  className="w3-border w3-white w3-round w3-padding preview-img"
                  src={image}
                  alt=""
                  onClick={() => 
                    props.deleteImage(index)}
                />
              )
            })}
          </div>

          {/* BODY*/}
          <label className="w3-xlarge">Friends Bio</label>
          <textarea
            className="w3-input w3-xlarge w3-padding  w3-margin-bottom"
            type="text"
            rows='15'
            id="body"
            placeholder="Friends Bio"
            title="Please input the body of text for your post about your family member. You can input links to other sites by using standard html. For example, to create a link, wrap the text that you want to create as a link in anchor tags (<a href='http://www.linkUrl.com'>Link to This Page</a>"
            defaultValue={props.updatePostObject.body}
          />
          {/* SUBMIT BUTTOn*/}
          <div className="w3-center">
            <button
              className="w3-button w3-black w3-round w3-margin-top w3-margin-bottom w3-xlarge"
              title="Click here to submit your post"
              onClick={(e) => {
                e.preventDefault()
                props.submitForm("ourFriends", props.updatePostObject._id, true)
                props.toggleUpdatePost()
              }}
            >Save Update
      </button>
          </div>
        </form>
      )
  }
}