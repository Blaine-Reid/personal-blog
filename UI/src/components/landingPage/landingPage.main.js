import React from 'react'
// import { NavLink } from 'react-router-dom'
import './landingPage.style.css'
import showImage from '../../scripts/globals'


export default
  function LandingPage(props) {

  let { title, body, images } = props.displayPosts[0] || { title: "", body: '', images: [] }

  //map over images in post and create elements for slideshow
  let slideShow = images.map((image, idx) => {
    return <img src={image} alt='' key={idx} className={idx === 0 ? "w3-show w3-center slideshow" : "w3-hide slideshow"} />
  })

  //map over images in post and create dots to select image in slideshow
  let dots = images.map((image, index) => {
    return <button className="w3-button dots img-change" key={index + 100} onClick={() => showImage(index)}>{index + 1}</button>
  })

  return (
    <div id="landingPage" className='w3-container'>
      <h1 className="page-header cursive">{title}</h1>
      <div className="w3-row">

        {/* cheat to create empty column 25% width*/}
        <div class="w3-col" style={{ width: '25vw' }}>

          <div className="hidden">spacer</div>
       

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
        <div class="w3-col" style={{ width: '25vw' }}>

          <div className="hidden">spacer</div>

  
        </div>

        <div className="w3-row ">
          {/* cheat to create empty column 25% width*/}
          <div class="w3-col" style={{ width: '12.5vw' }}><pre> </pre></div>
          <div className="text-div w3-threequarter ">
            <p className="w3-padding body-text">
              {body}
            </p>
          </div>
        </div>
      </div>
    </div>

  )

}