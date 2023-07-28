import React from 'react';
import { BsListStars } from 'react-icons/bs';

function Nav({ showSideNav, setShowSideNav }) {
  return (
    <>
      <nav className='fixed top-0 left-0 right-0 text-4xl text-white bg-[#354f] p-4 flex justify-center'>
        <button
          className='text-2xl absolute left-5 top-5'
          onClick={() => setShowSideNav(true)}
        >
          <BsListStars size={35} />
        </button>
        <span>QuikList</span>
      </nav>
    </>
  );
}

export default Nav;
