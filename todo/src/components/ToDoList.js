import React from 'react'
import ToDoItem from './ToDoItem'
const ToDoList = props => {
   const {
        todos,
        dispatch
    } = props
    return (
        <div>
           {todos.map((item) => (
            <ToDoItem
               key = {item.id}
               item = {item}
               dispatch = {dispatch}
               />
           ))}
        </div>
    )

}

export default ToDoList