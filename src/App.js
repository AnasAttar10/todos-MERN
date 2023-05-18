import './App.css';
import Header from './components/Header';
import { useEffect, useState } from 'react';
import TasksTable from './components/TasksTable';
import Footer from './components/Footer'

function App() {

  const [isTasksVisible , setIsTasksVisible] = useState(true)

  const [tasks , setTasks] =useState([])

  const [searchValue ,setSearchValue] = useState("")

  const handleSearchInput =(search)=>{
    setSearchValue(search);
  }

    const insertTodo = async(todo)=>{
    return fetch('http://localhost:8000/todo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({...todo}),
    })
  }

  const updateTodo = async(id , completedProp)=>{
    const updatedTodo = await fetch("http://localhost:8000/todo/" + id ,{ 
    method:"PUT",
    headers: {
      'Content-Type': 'application/json'
    },
    body : JSON.stringify({completed:completedProp}) 
  }
  );
  return updatedTodo
  }

  const deleteTodo= async (id) => {
    const deletedTodo = await fetch("http://localhost:8000/todo/" + id ,{
      method : "DELETE"
    });
    return deletedTodo
  }

  const retriveTodos =async ()=>{
   fetch("http://localhost:8000/todos")
  .then(response => {return response.json()}).then(data => {setTasks(data) })
  .catch(error => {console.log(error.message);});
  }

  const addTask =async(newtodo)=>{
     await insertTodo(newtodo)
     retriveTodos()
  }

  const deletTask =async (id)=>{
    await deleteTodo(id)
    retriveTodos()
  }

  const finishTask =async (id)=>{
    const completedProp = tasks.find(t=>t._id === id)?.completed |null  
    await updateTodo(id , !completedProp)
    retriveTodos()
  }



  useEffect(()=>{
     retriveTodos("http://localhost:8000/todos")
  },[])

  const completedTasks = tasks.filter(t=>t.completed).length

  const filterdTasks = searchValue? tasks.filter(t=>t.title.trim().toLowerCase().includes(searchValue)) : tasks

  return (
    <div className='d-flex min-vh-100 align-items-center bg-dark text-white'>
        <div className="App w-50 mx-auto mt-5 bg-secondary p-2">
          <Header 
          showItems={()=>setIsTasksVisible(!isTasksVisible)}
          isTasksVisible={isTasksVisible}
          handleSearchInput={handleSearchInput}
          addTask={addTask}
          />
          <TasksTable
            tasks={filterdTasks} 
            isTasksVisible={isTasksVisible}
            finishTask={finishTask}
            deletTask={deletTask}
          />
          <Footer 
            totalTasks= {tasks.length} 
            completedTasks={completedTasks}
          />
        </div>
    </div>

  );
}

export default App;


