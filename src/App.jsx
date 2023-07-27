import React, { useEffect, useState } from 'react';
import './App.css';
import InputForm from './components/InputForm';
import BottomNav from './components/BottomNav'; 
import GroceryList from './components/GroceryList';
import { FiEdit } from 'react-icons/fi'

function App() {
  const [todos, setTodos] = useState(() => {
    const storedTools = localStorage.getItem('todos');
    return storedTools ? JSON.parse(storedTools) : [];
  });

  const [listName, setListName] = useState(() => {
    const storedListName = localStorage.getItem('listName');
    return storedListName ? JSON.parse(storedListName) : 'Grocery List';
  });

  // useEffect will monitor changes to 'todos' and 'listName' and save them to local storage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    localStorage.setItem('listName', JSON.stringify(listName));
  }, [listName]);

  function handleCompleteItem(id) {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function handleDeleteItem(id) {
    setTodos((currentTodos) =>
      currentTodos.filter((todo) => todo.id !== id)
    );
  }

  return ( 
    <>
      <h1 className='flex text-4xl font-bold justify-center mt-[6vh] mb-[3vh] text-[#354F]'>
     
        <input
          type="text"
          value={listName}
          onChange={(e) => setListName(e.target.value)}
          className="outline-none border-none bg-transparent text-[#354F] text-4xl font-bold text-center"
          placeholder="Type List Name Here"
        />
        
      </h1>
      

      <InputForm setTodos={setTodos} />

      <GroceryList
        todos={todos}
        handleCompleteItem={handleCompleteItem}
        handleDeleteItem={handleDeleteItem}
        setTodos={setTodos}
      />

      <BottomNav />
    </>
  );
}

export default App;
