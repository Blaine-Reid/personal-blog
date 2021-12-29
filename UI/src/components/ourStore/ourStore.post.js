import React from 'react'
import './ourStore.css'

export default
  function StorePost(props) {
  return (
    <div class="w3-card-4 w3-light-green w3-margin w3-round">

      <div class="w3-container w3-center">
        <h3 className=" w3-padding">{props.title}</h3>
        <img 
        src={props.images[0]} 
        alt={props.title} 
        title={props.body}
        className="store-img w3-round" />
        <h4 className="w3-xlarge"><b>${props.price}</b></h4>

        <button className="w3-button w3-black w3-round w3-margin"><b>Buy Now</b></button>

      </div>

    </div>
  )
}