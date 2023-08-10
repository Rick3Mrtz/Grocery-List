import React from "react";
import { FaPencilAlt } from 'react-icons/fa';

function TitleInput({ isEditingListName, listName, handleListNameBlur, handleListNameChange, handleListNameKeyPress, setIsEditingListName }) {
    return (
        <>
                <div className='mb-32'></div>
        <h1 className='flex text-4xl font-bold justify-center mt-[6vh] mb-[3vh] text-[#354F]'>
          {isEditingListName ? (
            <input
              type="text"
              placeholder='Ex: Groceries'
              value={listName}
              onChange={handleListNameChange}
              onBlur={handleListNameBlur}
              onKeyDown={handleListNameKeyPress}
              className=" bg-white rounded-md w-4/6 text-[#354F] text-4xl font-bold text-center"
            />
          ) : (
            <>
              <span>{listName}</span>
              <button
                className='ml-2'
                onClick={() => setIsEditingListName(true)}
              >
                <FaPencilAlt size={24} color='black' />
              </button>
            </>
          )}
        </h1>
        </>
    )
}

export default TitleInput;