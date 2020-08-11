import React, {useState, useReducer} from 'react';
import AddToDoForm from './components/AddToDoForm';
import ToDoList from './components/ToDoList'
import { toDoReducer } from './reducers/toDoReducer';

const initialState = {

    todos: [
      {item: 'Learn about reducers',
    completed: false,
    id: 3892987589}
  ]
  }


function App() {

  const [state, dispatch] = useReducer(toDoReducer, initialState.todos)

  const addToDo = item => {

  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Things to Learn</h1>
      </header>
    <AddToDoForm
      dispatch = {dispatch}
    />
    
    <ToDoList
    todos={state}
    />
    </div>
  );
}

export default App;
