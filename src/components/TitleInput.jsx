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
      <h1 className='title-input mx-10 md:mx-2 lg:mx-2 flex text-[2.4rem] md:text-[2.5rem] lg:text-[2.7rem] font-bold justify-between mt-[6vh] mb-[2vh] '>
        
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
