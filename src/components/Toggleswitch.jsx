import React from 'react'

const Toggleswitch = ({showItems ,isTasksVisible})=> {
  return (
    <div className="form-check form-switch d-flex justify-content-center">
    <input className="form-check-input"
     type="checkbox" 
     name="toggleswitch"
     defaultChecked={isTasksVisible} 
     onChange={showItems}
    />
    <label className="form-check-label  ms-3" >Show All To Dos </label>
    </div>
  )
}

export default Toggleswitch