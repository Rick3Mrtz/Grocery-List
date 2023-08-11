import React from 'react';
import { FaPencilAlt } from 'react-icons/fa';
import { BsFillCheckSquareFill } from 'react-icons/bs';

function TitleInput({
  isEditingListName,
  listName,
  handleListNameBlur,
  handleListNameChange,
  handleListNameKeyPress,
  inputRef,
  setIsEditingListName
}) {

  
  return (
    <>
      <h1 className='title-input flex mx-2 px-2 text-[2.7rem] font-bold justify-start mt-[6vh] mb-[2vh] text-[#c0bda5]'>
        {isEditingListName ? (
          <div className=" ">
            <input
              ref={inputRef}
              type="  text"
              placeholder='Ex: Groceries'
              value={listName}
              onChange={handleListNameChange}
              onBlur={handleListNameBlur}
              onKeyDown={handleListNameKeyPress}
              className="bg-white text-black w-full py-0 outline-black h-4/5"
            />
          </div>
        ) : (
          <>
            <span>{listName}</span>
          </>
        )}
      </h1>
    </>
  );
}

export default TitleInput;
