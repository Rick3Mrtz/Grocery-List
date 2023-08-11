import React, { useState } from 'react';
import { useNavigate, BrowserRouter, Router, Route, Link, Routes } from 'react-router-dom';
import { BsPlusCircleFill } from 'react-icons/bs';
import { AiFillHome } from 'react-icons/ai';
import { BsImages } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsFillGridFill } from 'react-icons/bs';
import GridLayout from './GridLayout';

function BottomNav({ inputRef, handleCreateNewList, enterEditListNameMode }) {

  const [createNewListMode, setCreateNewListMode] = useState(false);

  const handleNewListClick = () => {
    setCreateNewListMode(true);
    handleCreateNewList();
  };

  return (

    <>
    <div>


    <div className="bottom-nav">

      
      
      <Link
      to='/'
      className="nav-button">
        <AiFillHome size={30} />
      </Link>
      
        <Link 
        to='/grid'
        className="nav-button">
        <BsFillGridFill size={30} />
        </Link>
       
      <button
        className="nav-button"
        id='nav-circle'
        onClick={() => {
          enterEditListNameMode();
          handleNewListClick();

          setTimeout(() => {
            if (inputRef.current) {
              inputRef.current.focus();
              inputRef.current.select();
            }
          }, 0);
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


    
    </div>
    </>

  );
}

export default BottomNav;
