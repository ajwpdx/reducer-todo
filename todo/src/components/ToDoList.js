import React from 'react'
import ToDoItem from './ToDoItem'
const ToDoList = props => {
   const {
        toDos
    } = props
    return (
        <div>
           <h2>Title of List</h2> 
           {toDos.map((item) => (
            <ToDoItem
               key = {item.id}
               item = {item}
               />
           ))}
        </div>
    )

}

export default ToDoList