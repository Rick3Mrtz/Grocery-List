import { useEffect, useState } from 'react';
import './App.css';
import { VscClose } from 'react-icons/vsc';
import InputForm from './components/InputForm';
import BottomNav from './components/BottomNav';
import GroceryList from './components/GroceryList';

function App() {
  const [todos, setTodos] = useState(() => {
    const storedTools = localStorage.getItem('todos');
    return storedTools ? JSON.parse(storedTools) : [];
  });

  // useEffect will monitor changes to 'todos' and save it to local storage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

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
      <h1 className='flex text-4xl font-bold justify-center mt-[6vh] mb-[3vh] text-[#354F52]'>
        Grocery List
      </h1>
      
      <InputForm setTodos={setTodos} />

      <GroceryList
        todos={todos}
        handleCompleteItem={handleCompleteItem}
        handleDeleteItem={handleDeleteItem}
        />

      <BottomNav />
    </>
  );
}

export default App;
