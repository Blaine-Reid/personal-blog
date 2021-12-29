import React from 'react'

export default
  function FormOurStore(props) {

  if (!props.updatePost) {
  return (
    <form name="ourStore">

      {/* POST TITLE */}
      <label className="w3-xlarge">Product Name</label>
      <input
        className="w3-input w3-xlarge w3-padding"
        type="text"
        id="title"
        placeholder="Name of product"
        title="Please input a name to be displayed at the top of your post. This will be in a bolder, more prominent text."
        defaultValue=''
      />

      {/* POST PRICE */}
      <label className="w3-xlarge">Product Price</label>
      <input
        className="w3-input w3-xlarge w3-padding"
        type="text"
        id="price"
        placeholder="Price of product"
        title="Please input the price of the product to be displayed to viewers"
        defaultValue=''
     />
      {/* POST LINK */}
      <label className="w3-xlarge">Product Link</label>
      <input
        className="w3-input w3-xlarge w3-padding"
        type="text"
        id="link"
        placeholder="Link to online shop"
        title="Please input the link(url) of the product to be 
        used when the buyer clicks on the 'Buy' button"
        defaultValue=''
     />

      {/* IMAGES*/}
      <div className="w3-center">
        <label
          className="w3-button w3-cyan w3-round w3-margin-top w3-margin-bottom w3-xlarge"
          title="Please click to select image to add to your product. Click on an image in the preview section to remove it from your post"
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
      <label className="w3-xlarge">Product Description</label>
      <textarea
        className="w3-input w3-xlarge w3-padding  w3-margin-bottom"
        type="text"
        rows='15'
        id="body"
        title="Product description that will be displayed when a user hovers over the item"
        placeholder="Please input the description for your post."
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
            props.submitForm("ourStore", null, false)
          }}
        >Submit Post
      </button>
      </div>
    </form>
  )
        }else{
  return (
    <form name="ourStore">

      {/* POST TITLE */}
      <label className="w3-xlarge">Product Name</label>
      <input
        className="w3-input w3-xlarge w3-padding"
        type="text"
        id="title"
        placeholder="Name of product"
        title="Please input a name to be displayed at the top of your post. This will be in a bolder, more prominent text."
        defaultValue={props.updatePostObject.title}
      />

      {/* POST PRICE */}
      <label className="w3-xlarge">Product Price</label>
      <input
        className="w3-input w3-xlarge w3-padding"
        type="text"
        id="price"
        placeholder="Price of product"
        title="Please input the price of the product to be displayed to viewers"
        defaultValue={props.updatePostObject.price}
     />
      {/* POST LINK */}
      <label className="w3-xlarge">Product Link</label>
      <input
        className="w3-input w3-xlarge w3-padding"
        type="text"
        id="link"
        placeholder="Link to online shop"
        title="Please input the link(url) of the product to be 
        used when the buyer clicks on the 'Buy' button"
        defaultValue={props.updatePostObject.link}
     />

      {/* IMAGES*/}
      <div className="w3-center">
        <label
          className="w3-button w3-cyan w3-round w3-margin-top w3-margin-bottom w3-xlarge"
          title="Please click to select image to add to your product. Click on an image in the preview section to remove it from your post"
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
      <label className="w3-xlarge">Product Description</label>
      <textarea
        className="w3-input w3-xlarge w3-padding  w3-margin-bottom"
        type="text"
        rows='15'
        id="body"
        title="Product description that will be displayed when a user hovers over the item"
        placeholder="Please input the description for your post."
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
            props.submitForm("ourStore", props.updatePostObject._id, true)
            props.toggleUpdatePost()
          }}
        >Save Update
      </button>
      </div>
    </form>
  )
}
}