import React from 'react'
import './ourJourney.post.css'
import showImage from '../../scripts/globals'

export default
  function Post(props) {
  //map over images in post and create elements for slideshow
  let slideShow = props.selectedPost.images.map((image, idx) => {
    return <img src={image} alt='' key={idx} className={idx === 0 ? "w3-show w3-center slideshow" : "w3-hide slideshow"} />
  })

  //map over images in post and create dots to select image in slideshow
  let dots = props.selectedPost.images.map((image, index) => {
    return <button className="w3-button dots img-change" key={index + 100} onClick={() => showImage(index)}>{index + 1}</button>
  })


  //Function mounted to scroll of page
  //only visible on devices of 600px width or greater
  if (window.screen.width >= 600) {
    window.onscroll = function () { adScroll() };
  }

  function adScroll() {
    // Get the header
    const ad_left = document.getElementById("ad-left")
    const ad_right = document.getElementById("ad-right")
    //adjusts where transition happens
    const transitionAdjustment = 200

    // Get the offset position of the navbar
    const sticky = document.getElementById('page-header')
      ? document.getElementById('page-header').offsetTop + transitionAdjustment
      : null

    if (window.pageYOffset > sticky) {
      if (sticky) {
        // LEFT AD
        ad_left.classList.add("sticky");
        ad_left.classList.add("w3-animate-opacity");
        ad_left.classList.remove("w3-hide");
        // RIGHT AD
        ad_right.classList.add("sticky");
        ad_right.classList.add("w3-animate-opacity");
        ad_right.classList.remove("w3-hide");
      }
    } else {
      if (sticky) {
        // LEFT AD
        ad_left.classList.add("w3-hide");
        ad_left.classList.remove("sticky");
        // RIGHT AD
        ad_right.classList.add("w3-hide");
        ad_right.classList.remove("sticky");
      }
    }
  }

  // NEEDS GOOGLE API KEY!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  let img_url = props.selectedPost.location
    ? `https://maps.googleapis.com/maps/api/staticmap?center=
 ${props.selectedPost.location} & zoom=14 & size=400x300 & sensor=false & key=${'KEY'}`
    : null

  return (
    <div>
      {/* HEADER */}
      <h1 id="page-header" className="page-header cursive">
        {props.selectedPost.title}
        {/* LOCATION NAME */}
        <h2 id="page-location" className="page-subheader cursor cursive w3-tooltip">
          {props.selectedPost.locationName}
          {/* GEOLOCATION MODAL TO DISPLAY GOOGLE MAP */}
          <span
            className="geolocation-modal w3-text w3-tag w3-border w3-white w3-round">
            <img src={img_url} alt={`Google Map of ${props.selectedPost.locationName}`} />
          </span>
        </h2>
      </h1>

      <div className="w3-row">

        {/* cheat to create empty column 25% width*/}
        <div class="w3-col w3-quarter" style={{ width: '25vw' }}>

          <div className="hidden">AD SPACE</div>
          <div id="ad-left" className="sticky left ad w3-hide">
            Ad Space
            </div>

        </div>

        {/* Image */}
        <div
          className="w3-display-container w3-half w3-padding"
        >
          {slideShow}

          <div className="w3-display-bottommiddle btn-container">
            {dots}
          </div>
        </div>

        {/* cheat to create empty column 25% width*/}
        <div class="w3-col w3-quarter" style={{ width: '25vw' }}>

          <div className="hidden">AD SPACE</div>

          <div id="ad-right" className="sticky right ad  w3-hide">
            Ad Space
          </div>

        </div>

        <div className="w3-row ">
          {/* cheat to create empty column 25% width*/}
          <div class="w3-col" style={{ width: '25vw' }}><pre> </pre></div>
          <div className="text-div w3-half ">

            <p className="w3-padding body-text">
              {props.selectedPost.body}
            </p>
          </div>
        </div>
      </div>
    </div>
  )

}