import React from 'react';
import { Link } from 'react-router-dom';
import { VscClose } from 'react-icons/vsc';

function GroceryList({ todos, handleCompleteItem, handleDeleteItem }) {
  return (
    <>
      <div className='bg-gray-200 mx-2 p-4 h-fit mt-8'>
        <h1 className='text-xl text-center font-extrabold'>
          Groceries we need
        </h1>
        <ul className='mt-6 list flex flex-col justify-start items-stretch'>
          {todos.map((todo) => (
            <li
              key={todo.id}
              className={`text-2xl flex items-center justify-between ${
                todo.completed ? 'completed' : ''
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

export default GroceryList;
