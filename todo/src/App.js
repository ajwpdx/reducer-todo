import React from 'react';
import AddToDoForm from './components/AddToDoForm';
import ToDoList from './components/ToDoList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Things to Learn</h1>
      </header>
    <AddToDoForm/>
    <ToDoList/>
    </div>
  );
}

export default App;
