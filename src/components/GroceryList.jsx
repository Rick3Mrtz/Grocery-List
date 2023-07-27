import React, { useState, useEffect } from 'react';
import { VscClose } from 'react-icons/vsc';
// import groceryProgress from './GroceryProgress';

function GroceryList({ todos, handleCompleteItem, handleDeleteItem }) {

    // const completion = groceryProgress();
    // console.log(completion)

  return (
    <>
    
      <div className='bg-gray-200 mx-2 p-4 h-fit mt-8 relative'>
      {/* <span
            style={{ transform: `translateX(${completion - 100}%)` }}
             className='absolute bg-red-600 h-1 w-full top-0'
        /> */}
        <h1 className='text-xl text-center font-extrabold'>
          Groceries we need
        </h1>
        <div className='mt-6 max-h-[43vh] overflow-y-auto pr-4'>
          <ul className='list flex flex-col justify-start items-stretch'>
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
        
      </div>
    </>
  );
}

export default GroceryList;
