import React from 'react';

function BottomNav() {
  return (
    <nav className='fixed bottom-0 left-0 right-0 bg-[#354f52] p-4 flex justify-around'>
      <button className='text-white font-bold' type='button'>
        Button 1
      </button>
      <button className='text-white font-bold' type='button'>
        Button 2
      </button>
      <button className='text-white font-bold' type='button'>
        Button 3
      </button>
      <button className='text-white font-bold' type='button'>
        Button 4
      </button>
    </nav>
  );
}

export default BottomNav;
