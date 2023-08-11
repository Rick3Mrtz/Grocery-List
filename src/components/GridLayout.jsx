import { useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import { BsThreeDots } from 'react-icons/bs';

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
    <h1 className=' mt-24 text-5xl text-[#5dc09a] text-left]'>
      Saved Files
    </h1>
    <div className="grid grid-cols-2 gap-4 p-4 mt-16 mb-8">
      {savedLists.map((list, index) => (
        <div key={index} className="card text-black relative">
          <button
            className='absolute top-0 right-0 px-[5px]'
            onClick={() => handleDeleteList(index)}>
            <BsThreeDots size={23} color='black' />
          </button>
          {list.listName} 
        </div>
      ))}
    </div>
    </>
  );
  
}

export default GridLayout;
