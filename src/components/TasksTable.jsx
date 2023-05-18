import React from 'react'
import Task from './Task'

const TasksTable = ({tasks ,isTasksVisible ,finishTask ,deletTask}) => {
  return (
    <div>
        <div className='d-flex justify-content-between align-items-center  bg-primary p-3 text-white border border-bottom-2'>
          <p className='col-sm-8 m-0 text-center'>Task</p>
          <p className='col-sm-2 m-0 text-end'>Done</p>
          <p className='col-sm-2 m-0 text-end'>Delete</p>
        </div>
        { isTasksVisible && tasks.map(t => <Task task={t} key={t._id} finishTask={finishTask}
        deletTask={deletTask}/>)}
    </div>
  )
}

export default TasksTable