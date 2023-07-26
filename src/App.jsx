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

  {/* useEffect will monitor changes to 'todos' and save it to local storage */ }

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
        Grocery List
      </h1>

      <InputForm setTodos={setTodos} />

      <div className='bg-gray-200 mx-8 p-4 h-fit mt-8'>
        <h1 className='text-xl text-center font-extrabold'>
          Groceries we need
        </h1>
        <ul className='mt-6 list flex flex-col justify-start items-stretch'>
          {todos.map((todo) => (
            <li
              key={todo.id}
              className={`text-4xl flex items-center justify-between ${todo.completed ? 'completed' : ''
                }`}
            >
              <div className='flex items-center'>
                <input
                  type='checkbox'
                  checked={todo.completed}
                  onChange={() => handleCompleteItem(todo.id)}
                  className='custom-checkbox'
                />
                <span className='ml-2'>{todo.title}</span>
              </div>
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