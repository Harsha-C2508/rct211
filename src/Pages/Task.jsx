import React from 'react'
import TaskInput from './TaskInput'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { getData } from '../Redux/action';

const Task = () => {
    const dispatch = useDispatch();
    const  tasks = useSelector((store)=>store.tasks)

    useEffect(()=>{
      getData(dispatch);
    },[])
console.log(tasks)
  return (
    <div>
      <div>
        <h1>TODOS</h1>
      </div>
        <TaskInput/>
        {tasks.length > 0 && tasks.map((todo)=>{
          return <div key={todo.id}>{todo.task}</div>
        })}
    </div>
  )
}

export default Task