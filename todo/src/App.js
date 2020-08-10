import React, {useState} from 'react';
import AddToDoForm from './components/AddToDoForm';
import ToDoList from './components/ToDoList'

const initialToDos = [
  {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  }
]


function App() {
  const [toDos, setToDos] = useState(initialToDos)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Things to Learn</h1>
      </header>
    <AddToDoForm/>
    
    <ToDoList
    toDos={toDos}
    />
    </div>
  );
}

export default App;
