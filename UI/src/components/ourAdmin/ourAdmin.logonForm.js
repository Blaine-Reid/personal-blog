import React from 'react'
//CSS
import './ourAdmin.style.css'

export default
  function AdminLogonForm(props) {

  return (
    <div id="logonForm" className='w3-cell w3-cell-middle'>

      <div className="w3-container w3-light-green w3-center ">
        <h3 className="w3-xxlarge">
          Please Log On
        </h3>
      </div>

      <form className="w3-container w3-light-grey">
        <h3 className="w3-red w3-center">{props.error}</h3>
        {/* USERNAME INPUT */}
        <div className="w3-padding w3-margin">
          <label className="w3-xlarge">Username</label>
          <input
            className="w3-input w3-xlarge w3-padding"
            type="text"
            title="Username is CASE-SENSITIVE"
            placeholder="Please input username"
            onChange={props.username}
            required
            autoFocus
          />
        </div>

        {/* PASSWORD INPUT */}
        <div className="w3-padding w3-margin">
          <label className="w3-xlarge">Password</label>
          <input
            className="w3-input w3-xlarge  w3-padding"
            type="password"
            title="Password is CASE-SENSITIVE"
            placeholder="Please input password"
            onChange={props.psw}
            required
          />
        </div>
        <div className=" w3-padding">
          <button
            class="w3-block w3-margin-top w3-margin-bottom w3-xxlarge w3-black  w3-round"
            onClick={props.logon}
          >
            Logon
        </button>
        </div>
      </form>

    </div>


  )
}