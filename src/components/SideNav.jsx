import React, { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

function SideNav({ showSideNav, savedLists, setSavedLists, setShowSideNav }) {
  const [newListName, setNewListName] = useState('');

  const handleAddList = () => {
    if (newListName.trim() === '') return;
    setSavedLists([...savedLists, newListName]);
    setNewListName('');
  };

  const handleDeleteList = (index) => {
    const updatedLists = [...savedLists];
    updatedLists.splice(index, 1);
    setSavedLists(updatedLists);
  };

  useEffect(() => {
    localStorage.setItem('savedLists', JSON.stringify(savedLists));
  }, [savedLists]);

  return (
    <>
      {showSideNav && (
        <div className='fixed left-0 top-0 h-full w-64 bg-[#354f] p-4 text-white'>
          <div className='flex justify-between items-center mb-4'>
            <h2 className='text-2xl font-bold'>Saved Lists</h2>
            <button onClick={() => setShowSideNav(false)}>
              <FaTimes size={24} color='white' />
            </button>
          </div>
          <ul>
            {savedLists.map((listName, index) => (
              <li key={index} className='flex justify-between items-center mb-2'>
                <span>{listName}</span>
                <button onClick={() => handleDeleteList(index)}>
                  <FaTimes size={16} color='red' />
                </button>
              </li>
            ))}
          </ul>
          <div className='mt-4'>
            <input
              type='text'
              placeholder='Enter list name'
              className='w-full px-2 py-1 rounded'
              value={newListName}
              onChange={(e) => setNewListName(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleAddList();
                }
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default SideNav;
