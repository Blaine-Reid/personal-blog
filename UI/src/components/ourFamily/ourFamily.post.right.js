import React from 'react'

export default
function FamilyPostRight(props){

  return (
    // ROW
    <div id="card-holder" className='w3-row w3-margin-bottom'>

      {/* CARD */}
      <div
        className="w3-card w3-container teaser-card w3-round-large w3-border"
      >
        {/* TITLE */}
        <h3
          className="cursive card-title w3-light-green"
          style={{ textAlign: 'right' }}
        >
          {props.title}

        </h3>


        {/* LEFT SIDE OF CARD */}
        <div className="w3-twothird">
          <div
            className="w3-container"
          >
            <p
              className="card-body"
            >
              {props.body}
  
            </p>
          </div>
        </div>
        {/* RIGHT SIDE OF CARD */}
        {/* IMAGE */}
        <div
          className="w3-third w3-padding"
        >
          <img src={props.images[0]} alt={props.title} className="card-image w3-round" />


        </div>

      </div>
    </div>
  )
}