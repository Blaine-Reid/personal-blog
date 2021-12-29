import React from 'react'


export default
  function ConfirmDelete(props) {


  return (

    <div
      className="modal"
    >
      <div className="modal-content">
        <div className="w3-container w3-center">
          <h3 className="w3-light-green w3-xxlarge">
            Delete this post?
          </h3>

        </div>
        <div className="w3-container w3-center  w3-margin-top w3-margin-bottom">
          <button
            className="w3-button w3-black w3-round w3-xlarge"
            onClick={() => {
              props.deleteDocument(props.id)
              props.cancelDelete()
            }}
          >Confirm
        </button>
          <button
            className="w3-button w3-red w3-round w3-margin-left w3-xlarge"
            onClick={props.cancelDelete}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )


}