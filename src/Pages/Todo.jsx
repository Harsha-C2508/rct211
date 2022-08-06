import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { getData } from '../Redux/action';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import Styles from '../style/todo.module.css'
const Todo = () => {
    const dispatch = useDispatch();
    const  tasks = useSelector((store)=>store.tasks)

    useEffect(()=>{
      getData(dispatch);
    },[])
console.log(tasks)
  return (
    <div>
      <div className={Styles.title}>
        <h1>TODOS APP</h1>
        <p>List your todos here,happy learning</p>
      </div>
        <TodoInput/>
        {tasks.length > 0 && tasks.map((todo)=>{
          return <div key={todo.id}>
            <TodoList task={todo.task}/>
          </div>
        })}
    </div>
  )
}

export default Todo