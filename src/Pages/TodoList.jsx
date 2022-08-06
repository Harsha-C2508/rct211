import React from 'react'
import Styles from '../style/todo.module.css'
const TodoList = ({task}) => {
  return (
    <div className={Styles.items}>
        <input type="checkbox"/>{task}</div>
  )
}

export default TodoList