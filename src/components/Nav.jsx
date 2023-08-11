import React from 'react';
import { HiOutlinePencilAlt } from 'react-icons/hi';

function Nav({ enterEditListNameMode, handleListNameBlur, inputRef }) {
  return (
    <>
      <nav className='fixed top-0 left-0 right-0 text-4xl text-[#c0bda5] p-4 flex justify-center'>
      <button
        className='fixed top-5 right-5 p-0'
        onClick={() => {
          handleListNameBlur();
          enterEditListNameMode();

          setTimeout(() => {
            if (inputRef.current) {
              inputRef.current.focus();
              inputRef.current.select();
            }
          }, 0);
          
        }}
      >
        <HiOutlinePencilAlt size={30} />
      </button>
      </nav>
    </>
  );
}
export default Nav;