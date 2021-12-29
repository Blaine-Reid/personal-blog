import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.style.css'

export default
  function Navbar(props) {


  return (
    <div id="navbar" className='w3-display-container'>

      <ul id="left-links" className="w3-container w3-display-bottomleft  links w3-margin-bottom">

        <NavLink
          to="/ourJourney"
          className="w3-left"
          onClick={() => { props.changePage("ourJourney") }}>
          Our Journey
        </NavLink>

        <NavLink
          to="/ourFamily"
          className="w3-right"
          onClick={() => { props.changePage("ourFamily") }}>
          Our Family
        </NavLink>

      </ul>

      <NavLink
        to='/'
        id="center-image"
        className='w3-circle w3-display-position w3-display-bottommiddle'
        onClick={() => { props.changePage("ourLanding") }}
        value="Home"
      />

      <ul id="left-links" className="w3-container w3-display-bottomright links w3-margin-bottom">

        <NavLink
          to="/ourFriends"
          className="w3-left"
          onClick={() => { props.changePage("ourFriends") }}>
          Our Friends
          </NavLink>

        <NavLink
          to="/ourStore"
          className="w3-right"
          onClick={() => { props.changePage("ourStore") }}>
          Our Store
          </NavLink>
      </ul>



    </div>
  )
}