import { useEffect, useState } from 'react'
import './App.css'
import { AiFillCheckCircle } from 'react-icons/ai'
import { VscClose } from 'react-icons/vsc'
import InputForm from './components/InputForm'

function App() {

  const [todos, setTodos] = useState(() => {
    const storedTools = localStorage.getItem('todos');
    return storedTools ? JSON.parse(storedTools) : [];
  })

  {/* useEffect will monitor changes to 'todos' and save it to local storage */}

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
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }
  

  return (
    <>
      <h1 className='flex text-4xl font-bold justify-center mt-[6vh] mb-[3vh] text-[#354F52]'>
        Brick's Grocery List
      </h1>

      <InputForm setTodos={setTodos} />
      
        {/* Groceries to Buy */}
        <div className='bg-gray-200 mx-8 p-4 h-fit mt-8'>
        <h1 className='text-xl text-center font-extrabold'>
          Groceries we need
        </h1>

        <ul className='mt-6 list flex flex-col justify-start items-center'>
          {todos.map((todo) => (
            <li
              key={todo.id}
              className={`text-4xl ${todo.completed ? 'completed' : ''}`}
            >
              <button onClick={() => handleCompleteItem(todo.id)}>
                <AiFillCheckCircle size={30} color='green' />
              </button>
              {todo.title}
              <button onClick={() => handleDeleteItem(todo.id)}>
                <VscClose size={30} color='red' />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;