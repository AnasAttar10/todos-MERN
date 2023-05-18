import React, { useState } from 'react'

const AddTask = ({addTask})=> {

  const emptyTask ={
    id:Math.floor(Math.random()*100),
    title :"",
    completed:false
  }

  const [task,setTask] = useState(emptyTask)

  const handleInput =(e)=>{
    const oldTask = {...task}
    oldTask[e.target.name] =e.target.value
    setTask(oldTask)
  }
  const handleSubmit =(e)=>{
    e.preventDefault();
    addTask(task)
    clear()
  }
  const clear =()=>{
    setTask(emptyTask)
  }
  return (
    <div>
        <form action="" onSubmit={handleSubmit} className=' d-flex justify-content-between mt-5'>
            <input type='text' name="title" value={task.title} placeholder='Enter The Task ' className='col-sm-10' required onChange={handleInput}/>
            <input className='btn btn-success col-sm-2 border-radius-0' type="submit" value="ADD"/>
        </form>

    </div>
  )
}

export default AddTask