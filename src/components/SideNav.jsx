import { useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

function SideNav({ showSideNav, savedLists, setSavedLists, setShowSideNav, setSelectedList, listName }) {
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
        <div className='fixed left-0 top-0 h-full w-64 bg-[#c0bda5] p-4 text-black'>
          <div className='flex justify-between items-center mb-4'>
            <h2 className='text-2xl font-bold'>Saved Lists</h2>
            <button onClick={() => setShowSideNav(false)}>
              <FaTimes size={24} color='white' />
            </button>
          </div>
          <ul>
            {savedLists.map((list, index) => (
                <li key={index} className='flex justify-between items-center mb-2'>
                <span>{list.listName}</span>
                <button onClick={() => handleDeleteList(index)}>
                  <FaTimes size={16} color='red' />
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default SideNav;