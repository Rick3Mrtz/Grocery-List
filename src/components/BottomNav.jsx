import React, { useState } from 'react';
import { BsPlusCircleFill } from 'react-icons/bs';
import { BsListStars } from 'react-icons/bs';
import { AiFillHome } from 'react-icons/ai';
import { BsImages } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';

function BottomNav({ setShowSideNav, handleCreateNewList, enterEditListNameMode }) {
  const [createNewListMode, setCreateNewListMode] = useState(false);

  const handleNewListClick = () => {
    setCreateNewListMode(true);
    handleCreateNewList();
  };

  return (
    <div className="bottom-nav bg-gray-200">

      <button className="nav-button">
        <AiFillHome size={30} />
      </button>

      <button className='nav-button' onClick={() => setShowSideNav(true)}>
        <BsListStars size={30} />
      </button>

      <button
        className="nav-button"
        id='nav-circle'
        onClick={() => {
          enterEditListNameMode();
          handleNewListClick();
        }}
      >
        <BsPlusCircleFill size={50} />
      </button>

      <button className="nav-button">
        <BsImages size={30} />
      </button>

      <button className="nav-button">
        <BsInstagram size={30} />
      </button>

    </div>
  );
}

export default BottomNav;
