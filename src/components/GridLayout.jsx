import { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import { TiDelete } from 'react-icons/ti';

function GridLayout({ savedLists, setSavedLists }) {

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
    <h1 className=' mt-24 text-5xl text-left]'>
      Saved Files
    </h1>
    <p className='mt-8 text-2xl text-red-600 text-center'>*Under Construction*</p>
    <div className="grid grid-cols-2 gap-4 p-4 mt-16 mb-8 cursor-not-allowed">
      {savedLists.map((list, index) => (
        <div key={index} className="card text-black bg-gray-200 relative">
          <button
            className='absolute top-0 right-0 px-[5px]'
            onClick={() => handleDeleteList(index)}>
            <TiDelete size={23} color='black' />
          </button>
          {list.listName} 
        </div>
      ))}
    </div>
    </>
  );
  
}

export default GridLayout;
