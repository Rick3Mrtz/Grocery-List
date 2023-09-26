import React, { useState, useEffect } from 'react';
import { MdAdd } from 'react-icons/md';

function InputForm({ setTodos }) {
  const [newItem, setNewItem] = useState('');

  useEffect(() => {
  }, [newItem]);

  function handleSubmit(e) {
    e.preventDefault();

    // Trim the newItem to remove leading/trailing whitespace before checking if it's empty
    const trimmedNewItem = newItem.trim();

    if (trimmedNewItem !== '') {
      const newItemObj = {
        id: Math.random().toString(36).slice(2, 9),
        title: trimmedNewItem,
        completed: false,
      };
      setTodos((currentTodos) => [...currentTodos, newItemObj]);
    }

    setNewItem('');
  }

  return (
    <>
      <form onSubmit={handleSubmit} className='new-item-form mt-6 rounded-md mx-10 md:mx-2 lg:mx-2'>
        <input
          className='w-[47vw] rounded-md h-[40px] my-4 max-w-[17rem] pl-2 text-black'
          type='text'
          id='item'
          placeholder='Need Anything?'
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        {/* <button type='submit' className='btn-add'>
          <MdAdd size={25} />
        </button> */}
      </form>
    </>
  );
}

export default InputForm;
