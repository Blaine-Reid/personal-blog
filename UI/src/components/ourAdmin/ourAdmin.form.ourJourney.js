import React from 'react'


export default
  function FormOurJourney(props) {

  let location = (function () {
    if (navigator.geolocation) {
      return navigator.geolocation.getCurrentPosition(showPosition) || "Unable to get location";
    } else {
      return "Geolocation is not supported by this browser.";
    }
  })()

  function showPosition(position) {
    return position.coords.latitude + "," + position.coords.longitude;

  }


  if (!props.updatePost) {
    return (
      <form name="ourJourney">

        {/* POST TITLE */}
        <label className="w3-xlarge">Title</label>
        <input
          className="w3-input w3-xlarge w3-padding"
          type="text"
          id="title"
          placeholder="Title for your post"
          title="Please input a title to be displayed at the top of your post. This will be in a bolder, more prominent text."
          defaultValue=''
        />

        {/* POST DATE */}
        <label className="w3-xlarge">Date</label>
        <input
          className="w3-input w3-xlarge w3-padding"
          type="date"
          id="date"
          placeholder="Date of your posting"
          title="Please select a date to be displayed at the top of your post. This will be a bolder more, prominent text. It should be the date of your post. Click the calander to the side of the input to select a date or type on in"
          defaultValue=''
        />

        {/* POST LOCATION NAME*/}
        <label className="w3-xlarge">Location Name</label>
        <input
          className="w3-input w3-xlarge w3-padding"
          type="text"
          id="locationName"
          placeholder="Name of your location"
          title="Please select a date to be displayed at the top of your post. This will be a bolder more, prominent text. It should be the date of your post. Click the calander to the side of the input to select a date or type on in"
          defaultValue=''
        />

        {/* POST LOCATION LONG LAT*/}
        <label className="w3-xlarge">Location Lat/Lon</label>
        <input
          className="w3-input w3-xlarge w3-padding"
          type="text"
          id="locationLatLon"
          placeholder="Latitude and Longitute of you post"
          value={location}
          title="This field automatically generates as long as you've given approval for the site to gather your location information. It is used to display a map provided by Google Map's API"
          readOnly
        />
        {/* IMAGES*/}
        <div className="w3-center">
          <label
            className="w3-button w3-cyan w3-round w3-margin-top w3-margin-bottom w3-xlarge"
            title="Please click to select image to add to your blog post. Click on an image in the preview section to remove it from your post"
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
        <label className="w3-xlarge">Blog Post Body</label>
        <textarea
          className="w3-input w3-xlarge w3-padding  w3-margin-bottom"
          type="text"
          rows='15'
          id="body"
          placeholder="Blog post body"
          title="Please input the body of text for your post. You can input links to other sites by using standard html. For example, to create a link, wrap the text that you want to create as a link in anchor tags (<a href='http://www.linkUrl.com'>Link to This Page</a>"
          defaultValue=''
        />
        {/* SUBMIT BUTTOn*/}
        <div className="w3-center">
          <button
            id="submit-form"
            className="w3-button w3-black w3-round w3-margin-top w3-margin-bottom w3-xlarge"
            title="Click here to submit your post"
            onClick={(e) => {
              e.preventDefault()
              props.submitForm("ourJourney", null, false)
            }}
          >Submit Post
      </button>
        </div>
      </form>
    )
  } else {
    return (
      <form name="ourJourney">

        {/* POST TITLE */}
        <label className="w3-xlarge">Title</label>
        <input
          className="w3-input w3-xlarge w3-padding"
          type="text"
          id="title"
          placeholder="Title for your post"
          title="Please input a title to be displayed at the top of your post. This will be in a bolder, more prominent text."
          defaultValue={props.updatePostObject.title}
        />

        {/* POST DATE */}
        <label className="w3-xlarge">Date</label>
        <input
          className="w3-input w3-xlarge w3-padding"
          type="date"
          id="date"
          placeholder="Date of your posting"
          title="Please select a date to be displayed at the top of your post. This will be a bolder more, prominent text. It should be the date of your post. Click the calander to the side of the input to select a date or type on in"
          defaultValue={props.updatePostObject.date}
        />

        {/* POST LOCATION NAME*/}
        <label className="w3-xlarge">Location Name</label>
        <input
          className="w3-input w3-xlarge w3-padding"
          type="text"
          id="locationName"
          placeholder="Name of your location"
          title="Please select a date to be displayed at the top of your post. This will be a bolder more, prominent text. It should be the date of your post. Click the calander to the side of the input to select a date or type on in"
          defaultValue={props.updatePostObject.locationName}
        />

        {/* POST LOCATION LONG LAT*/}
        <label className="w3-xlarge">Location Lat/Lon</label>
        <input
          className="w3-input w3-xlarge w3-padding"
          type="text"
          id="locationLatLon"
          placeholder="Latitude and Longitute of you post"
          value={props.updatePostObject.locationLatLon }
          title="This field automatically generates as long as you've given approval for the site to gather your location information. It is used to display a map provided by Google Map's API"
          readOnly
        />
        {/* IMAGES*/}
        <div className="w3-center">
          <label
            className="w3-button w3-cyan w3-round w3-margin-top w3-margin-bottom w3-xlarge"
            title="Please click to select image to add to your blog post. Click on an image in the preview section to remove it from your post"
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
        <label className="w3-xlarge">Blog Post Body</label>
        <textarea
          className="w3-input w3-xlarge w3-padding  w3-margin-bottom"
          type="text"
          rows='15'
          id="body"
          placeholder="Blog post body"
          title="Please input the body of text for your post. You can input links to other sites by using standard html. For example, to create a link, wrap the text that you want to create as a link in anchor tags (<a href='http://www.linkUrl.com'>Link to This Page</a>"
          defaultValue={props.updatePostObject.body}
        />
        {/* SUBMIT BUTTOn*/}
        <div className="w3-center">
          <button
            id="submit-form"
            className="w3-button w3-black w3-round w3-margin-top w3-margin-bottom w3-xlarge"
            title="Click here to submit your post"
            onClick={(e) => {
              e.preventDefault()
              props.submitForm("ourJourney", props.updatePostObject._id, true)
              props.toggleUpdatePost()
            }}
          >Submit Post
      </button>
        </div>
      </form>
    )
  }
}