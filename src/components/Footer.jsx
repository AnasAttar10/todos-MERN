import React from 'react'

const Footer = ({totalTasks ,completedTasks})=> {
  return (
    <div className='d-flex justify-content-evenly p-2 bg bg-dark text-white'> 
        <div>Total Tasks  : {totalTasks} </div>
        <div> Completed Tasks : {completedTasks} </div>
    </div>
  )
}

export default Footer