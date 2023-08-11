import React, { useState, useEffect } from 'react';
import { VscClose } from 'react-icons/vsc';
import { VscCheck } from 'react-icons/vsc';
import { BiEdit } from 'react-icons/bi';
import SaveList from './SaveList';

function GroceryList({ todos, handleCompleteItem, handleDeleteItem, setTodos, selectedList, setSavedLists, listName, handleSelectAll }) {
  const filteredTodos = todos.filter(todo => todo.list === selectedList);
  
  // const hasTodos = filteredTodos.length > 0;

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

  const handleKeyPress = (e, id) => {
    if (e.key === "Enter") {
      handleUpdateItem(id);
    }
  }

  return (
    <>

        <div className=' rounded-md mx-2 px-2 py-2 h-fit mt-6 relative'>
          <div className='max-h-[43vh] overflow-y-auto'>
            <ul className='list flex flex-col justify-start items-stretch text-[#c0bda5]'>
              {todos.map((todo) => (
                <li
                  key={todo.id}
                  className={`text-lg flex items-center justify-between ${todo.completed ? 'completed' : ''}`}
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
                        className='edit-input w-full outline-none border-none bg-white text-lg text-black font-bold ml-[7px] pl-2'
                      />
                    ) : (
                      <span className='ml-4'>{todo.title}</span>
                    )}
                  </div>
                  <div className='flex items-center'>
                    {editedItem === todo.id ? (
                      <button onClick={() => handleUpdateItem(todo.id)}
                        id='confirm-edit-btn'
                      >
                        <VscCheck size={30} />
                      </button>
                    ) : (
                      <button id='list-edit-btn' onClick={() => handleEditItem(todo.id, todo.title)}>
                        <BiEdit size={30} />
                      </button>
                    )}
                    <button id='delete-single-btn' onClick={() => handleDeleteItem(todo.id)}>
                      <VscClose size={30} />
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