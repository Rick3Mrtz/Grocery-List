import React, { useState, useEffect } from 'react';
import { VscClose } from 'react-icons/vsc';
import { VscCheck} from 'react-icons/vsc';
import { BiEdit } from 'react-icons/bi';
import './GroceryList.css'

function GroceryList({ todos, handleCompleteItem, handleDeleteItem, setTodos }) {
  const [editedItem, setEditedItem] = useState(null);
  const [updatedTitle, setUpdatedTitle] = useState('');

  const handleEditItem = (id, title) => {
    setEditedItem(id);
    setUpdatedTitle(title);
  };  

  const handleUpdateItem = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, title: updatedTitle } : todo
    );
    setEditedItem(null);
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

//   Code below is for using a key to do a function desired

  const handleKeyPress = (e, id) => {
    if (e.key === "Enter") {
        handleUpdateItem(id);
    }
  }

  return (
    <>
      <div className='bg-gray-200 mx-2 p-4 h-fit mt-6 relative'>
        <div className='max-h-[43vh] overflow-y-auto pr-4'>
          <ul className='list flex flex-col justify-start items-stretch'>
            {todos.map((todo) => (
              <li
                key={todo.id}
                className={`text-lg flex items-center justify-between ${
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
                  {editedItem === todo.id ? (
                    <input
                      type='text'
                      value={updatedTitle}
                      onChange={(e) => setUpdatedTitle(e.target.value)}
                      onKeyDown={(e) => handleKeyPress(e, todo.id)}
                      onMouseDown={(e) => e.stopPropagation()}
                      className='edit-input outline-none border-none bg-white text-lg font-bold'
                    />
                  ) : (
                    <span className='ml-4'>{todo.title}</span>
                  )}
                </div>
                <div className='flex items-center'>
                  {editedItem === todo.id ? (
                    <button onClick={() => handleUpdateItem(todo.id)}
                    className='btn-save'
                    >
                      <VscCheck size={30} color='green' />
                    </button>
                  ) : (
                    <button onClick={() => handleEditItem(todo.id, todo.title)}>
                      <BiEdit size={30} color='black' />
                    </button>
                  )}
                  <button onClick={() => handleDeleteItem(todo.id)}>
                    <VscClose size={30} color='red' />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default GroceryList;