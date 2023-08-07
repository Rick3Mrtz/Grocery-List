import { useState } from 'react';
import AddSave from './AddSave';
import { MdAdd } from 'react-icons/md';

function InputForm({ setTodos }) {
  const [newItem, setNewItem] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    // Trim the newItem to remove leading/trailing whitespace before checking if it's empty
    const trimmedNewItem = newItem.trim();
    if (trimmedNewItem !== '') {
      setTodos((currentTodos) => [
        ...currentTodos,
        { id: crypto.randomUUID(), title: trimmedNewItem, completed: false },
      ]);
    }

    setNewItem('');
  }

    return (
        <>
            <form onSubmit={handleSubmit} className='new-item-form'>
                <input
                    className='w-[47vw] h-[40px] my-4 max-w-[17rem] pl-2'
                    type='text'
                    id='item'
                    placeholder='Need Anything?'
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                >
                </input>
                <button type='submit' className='btn-add'>
                  <MdAdd size={25} />
                </button>
               
            </form>
            {/* <AddSave /> */}
        </>
    )
}

export default InputForm;