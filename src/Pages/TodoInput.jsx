import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { getData, addTaskFailure, addTaskRequest, addTaskSuccess } from '../Redux/action'

const TodoInput = () => {
    const [newTask,setNewTask] = useState("");

    const dispatch = useDispatch()
    const handleNewTask = () =>{
       if(newTask){
            const payload = {
              task: newTask,
              status: false
            }
            dispatch(addTaskRequest())
           axios.post("http://localhost:8080/tasks",payload)
           .then((r)=>{
               dispatch(addTaskSuccess(r.data))
           })
           .then(()=> getData(dispatch))
           .catch((e)=>{
                dispatch(addTaskFailure(e));
           })
       }
    }
  return (
    <div>
        <input value={newTask} onChange={(e)=> setNewTask(e.target.value)} />
        <button onClick={handleNewTask} >New Task</button>
    </div>
  )
}

export default TodoInput