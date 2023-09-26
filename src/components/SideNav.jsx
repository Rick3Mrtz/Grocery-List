import React, { useState, useEffect } from 'react';
import { useNavigate, BrowserRouter, Router, Route, Link, Routes } from 'react-router-dom';
import { BsPlusCircleFill } from 'react-icons/bs';
import { AiFillHome } from 'react-icons/ai';
import { BsFillSunFill } from 'react-icons/bs';
import { ImBrightnessContrast } from 'react-icons/im';
import { BsFillGridFill } from 'react-icons/bs';
import GridLayout from './GridLayout';

function SideNav({ inputRef, handleCreateNewList, enterEditListNameMode }) {

  const [createNewListMode, setCreateNewListMode] = useState(false);

  const handleNewListClick = () => {
    setCreateNewListMode(true);
    handleCreateNewList();
  };

  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (

    <>
  <div className="side-nav fixed h-full top-0 left-0 px-2 flex flex-col justify-center">
    <Link to='/Quik-List' className="nav-button my-6 p-4 rounded-2xl">
      <AiFillHome size={30} />
    </Link>

    <Link to='/Quik-List' className="nav-button my-6 p-4 rounded-2xl" id='nav-circle' onClick={() => {
      enterEditListNameMode();
      handleNewListClick();

      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus();
          inputRef.current.select();
        }
      }, 0);
    }}>
      <BsPlusCircleFill size={30} />
    </Link>

    <Link to='/grid' className="nav-button active my-6 p-4 rounded-2xl">
      <BsFillGridFill size={30} />
    </Link>

    <Link onClick={toggleDarkMode} className="nav-button my-6 p-4 rounded-2xl">
      <ImBrightnessContrast size={30} />
    </Link>
  </div>
</>


  );
}

export default SideNav;
