import React from 'react';
import { FaPencilAlt } from 'react-icons/fa';
import { BsFillCheckSquareFill } from 'react-icons/bs';
import { HiOutlinePencilAlt } from 'react-icons/hi';


function TitleInput({
  isEditingListName,
  listName,
  handleListNameBlur,
  handleListNameChange,
  handleListNameKeyPress,
  inputRef,
  enterEditListNameMode,
  setIsEditingListName
}) {

  
  return (
    <>
      <h1 className='title-input mx-10 md:mx-0 lg:mx-0  flex text-[2rem] md:text-[2.5rem] lg:text-[2.5rem] font-bold justify-between mt-[4vh] md:mt-[8vh] lg:mt-[8vh] mb-[2vh] '>
        
          <div>
            <input
              ref={inputRef}
              type="text"
              placeholder='Ex: Groceries'
              value={listName}
              onChange={handleListNameChange}
              onBlur={handleListNameBlur}
              onKeyDown={handleListNameKeyPress}
              className=" bg-transparent outline-none w-full h-4/5 text-center"
            />
          </div>
      </h1>
    </>
  );
}

export default TitleInput;
