import React from 'react'

//THIS IS THE TILE ON THE RIGHT SIDE OF THE ADMIN DASHBOARD THAT
//DISPLAYS CURRENT POSTS ON EACH PAGE
export default
  function DocumentTile(props) {

  return (
    <div
      title="Please click on an entry to update or delete the posting"
      className="w3-card w3-row w3-padding w3-margin-bottom animate-bottom w3-white"
    >
      <div className='w3-row w3-margin-bottom'>
      <div className="w3-third">
        <img src={props.images[0]} alt="" />
      </div>
      <div className="w3-twothird">
        <div className="w3-container" style={{ color:'#838080'}}>
          <strong>
            {props.title ? props.title : null}
          </strong>
        </div>
        <div className="w3-container" style={{ color: '#838080' }}>
          {props.date ? props.date : null}
        </div>
        <div className="w3-container" style={{ color: '#838080' }}>
          {props.body ? props.body.slice(0, 50).concat('...') : "No Posts"}
        </div>
      </div>
      </div>
        <div className='w3-row'>
          <button
          type="button"
          className="w3-button w3-cyan w3-round"
          onClick={()=>{
            props.toggleUpdatePost(props.index)
          }}
          >
            edit
          </button>
          <button
          type="button"
          className="w3-button w3-right w3-black w3-round"
          onClick={()=>{
            props.openConfirmDelete(props.id)
          }}
          >
            delete
            </button>
       
        </div>
    </div>
  )
}