import React from "react";
import { BiSolidSelectMultiple } from 'react-icons/bi'
import { VscClearAll } from 'react-icons/vsc'

function SaveList({ todos, setSavedLists, listName }) {
    const handleSaveList = () => {
        if (listName.trim() !== '' && todos.length > 0) {
            // Create a new list using the todos
            const newList = 
            {
                listName: listName,
                todos: todos
            };
            
            // Add the new list to savedLists state
            setSavedLists(savedLists => [...savedLists, newList]);
        }
    };

    return (
        <div className="w-full flex items-center justify-between">
            <button id="select-all" className='btn'>
                <BiSolidSelectMultiple size={30} />
            </button>

            <button
                id="save-list"
                className='btn'
                onClick={handleSaveList}
            >
                Save List
            </button>

            <button id="clear-all" className='btn'>
                <VscClearAll size={30} />
            </button>
        </div>
    );
}

export default SaveList;
