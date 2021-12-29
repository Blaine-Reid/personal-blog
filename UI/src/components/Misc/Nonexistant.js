import React from 'react'
import './Loading.css'

export default
  function Nonexistant(props) {

  return (
    <div>
      <h1 className="page-header cursive">404 Missing Page</h1>
      
      <div className="w3-row">

        <div className="w3-row ">
          {/* cheat to create empty column 25% width*/}
          <div class="w3-col" style={{ width: '12.5vw' }}><pre> </pre></div>
          <div className="text-div w3-threequarter ">
            <p className="w3-padding body-text">
              Please check your spelling in the URL bar or please check back later, as this page maybe under construction. Thank you
            </p>
          </div>
        </div>
      </div>
    </div>

  );
}