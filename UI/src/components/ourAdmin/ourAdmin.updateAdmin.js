import React from 'react'


export default
  function UpdateAdmin(props) {

  //function to submit new admin user info
  function UpdateAdminInfo() {
    let newUsernameInput = document.getElementById('new-username')
    let newPswInput = document.getElementById('new-psw')
    let newCpswInput = document.getElementById('new-cpsw')

    if (newPswInput.value === newCpswInput.value) {
      props.submitUpdateAdmin(newUsernameInput.value, newPswInput.value)
      props.toggleUpdateAdmin()

    } else{
      newPswInput.value=''
      newCpswInput.value=''
      newPswInput.placeholder='PASSWORDS MUST MATCH'
      newCpswInput.placeholder = 'PASSWORDS MUST MATCH'

      setTimeout(()=>{
        newPswInput.placeholder = "Password MUST have A-Z, a-z, 0-9 and special character"
        newCpswInput.placeholder = "Please confirm new password"
      },1000)

    }

  }

  return (

    <div
      className="modal"
    >
      <div className="modal-content">
        <div className="w3-container w3-center">
          <h3 className="w3-light-green w3-xxlarge">
            Update Admin Login and Password
          </h3>
        </div>
        <div className='w3-container'>
          <input
            id="new-username"
            className="w3-input w3-xlarge w3-margin-bottom w3-padding"
            type="text"
            title="Username is CASE-SENSITIVE"
            placeholder="Please input new username"
            required
            autoFocus
          />
          <input
            id='new-psw'
            className="w3-input w3-xlarge  w3-margin-bottom w3-padding"
            type="password"
            placeholder="Password MUST have A-Z, a-z, 0-9 and special character"
            title="Password MUST have uppercase,lowercase, number and special character"
            pattern="(?=.*\d)(?=.*\W)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            required
          />
          <input
            id='new-cpsw'
            className="w3-input w3-xlarge  w3-padding"
            type="password"
            title="Password is CASE-SENSITIVE"
            placeholder="Please confirm new password"
            pattern="(?=.*\d)(?=.*\W)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            required
          />

        </div>

        <div className="w3-container w3-center  w3-margin-top w3-margin-bottom">
          <button
            className="w3-button w3-black w3-round w3-xlarge"
            onClick={() => {
              UpdateAdminInfo()
            }}
          >Confirm
        </button>
          <button
            className="w3-button w3-red w3-round w3-margin-left w3-xlarge"
            onClick={() => {
              props.toggleUpdateAdmin()
            }
            }
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )


}