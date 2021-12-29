import React from 'react'
import { useHistory } from 'react-router-dom'

export default
  function TeaserRight(props) {

  let history = useHistory()

  function viewPost(path) {
    //get the id of the psot being clicked on
    let documentId = props.id
    //sets selected post when user clicks on it
    props.selectPost(documentId)
    //push the new path into history to load full post
    history.push(path)

  }


  return (
    // ROW
    <div id="card-holder" className='w3-row w3-margin-bottom'>

      {/* CARD */}
      <div
        className="w3-card w3-container teaser-card cursor w3-round-large w3-border"
        title="Click to see full post"
        onClick={() => viewPost(`/ourJourney/${props.title.split(' ').join('-')}`)}
      // onClick={() => props.displayFullPost(props.id)}
      >
        {/* TITLE */}

        <h3
          className="cursive card-title w3-light-green"
        >
          {props.title}
          {/* DATE */}
          <span className="w3-right card-date">
            {props.date
              ? new Date(props.date).toLocaleString('en-US', { "dateStyle": 'medium' })
              : null}
          </span>
        </h3>

        {/* LOCATION */}
        <div className="w3-container">
          {/* LOCATION */}
          <h4
            className="w3-right card-location"
          >
            {props.locationName ? props.locationName : null}
          </h4>
        </div>

        {/* RIGHT SIDE OF CARD */}
        <div className="w3-twothird">
          <div
            className="w3-container"
          >
            <p
              className="card-body w3-display-container w3-tooltip"
            >{props.body.slice(0, 1000).concat("...")}
              <span className="w3-text w3-round w3-gray w3-padding w3-display-middle"><b>CLICK TO SEE MORE</b></span>
            </p>
          </div>

        </div>
        {/* RIGHT SIDE OF CARD */}
        {/* IMAGE */}
        <div className="w3-third">
          <img src={props.images[0]} alt={props.title} className="card-image w3-round" />
        </div>

      </div>
    </div>
  )
}