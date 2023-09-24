import React, { useState } from 'react';
import { useNavigate, BrowserRouter, Router, Route, Link, Routes } from 'react-router-dom';
import { BsPlusCircleFill } from 'react-icons/bs';
import { AiFillHome } from 'react-icons/ai';
import { BsImages } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsFillGridFill } from 'react-icons/bs';
import GridLayout from './GridLayout';

function SideNav({ inputRef, handleCreateNewList, enterEditListNameMode }) {

  const [createNewListMode, setCreateNewListMode] = useState(false);

  const handleNewListClick = () => {
    setCreateNewListMode(true);
    handleCreateNewList();
  };

  return (

    <>
    <div className="side-nav fixed top-0 left-0 bg-[#c0bda5] px-2 rounded-tr-3xl rounded-br-3xl">

      <div className='flex flex-col justify-between'>
      
      <Link
      to='/'
      className="nav-button my-3 p-4 rounded-2xl ">
        <AiFillHome size={30} />
      </Link>
      
        <Link 
        to='/grid'
        className="nav-button my-3 p-4 rounded-2xl ">
        <BsFillGridFill size={30} />
        </Link>
       
        <Link
      to='/'
      
        className="nav-button my-3 p-4 rounded-2xl "
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
        <BsPlusCircleFill size={30} />
      
      </Link>

      <Link className="nav-button my-3 p-4 rounded-2xl ">
        <BsImages size={30} />
      </Link>

      <Link className="nav-button my-3 p-4 rounded-2xl ">
        <BsInstagram size={30} />
      </Link>
      </div>

    </div>
    </>

  );
}

export default SideNav;
