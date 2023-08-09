import React, { useState } from "react";
import { BiSolidSelectMultiple } from 'react-icons/bi'
import { VscClearAll } from 'react-icons/vsc'
import ClearAllPopup from "./ClearAllPopup";

function SaveList({ todos, setTodos, setSavedLists, listName = "", handleSelectAll }) {
    const [showConfirmationPopup, setShowConfirmationPopup] = useState(false)

    const handleSaveList = () => {
        if (listName.trim() !== '' && todos.length > 0) {
            const newList = 
            {
                listName: listName,
                todos: todos
            };
            
            setSavedLists(savedLists => [...savedLists, newList]);
        }
    };

    const handleClearTodosConfirmed = () => {
        setTodos([]);
        setShowConfirmationPopup(false);
    };

    const handleClearAllCanceled = () => {
        setShowConfirmationPopup(false);
    };


    return (
        <div className="flex items-center justify-between mx-2">
            <button id="select-all" className='btn' onClick={handleSelectAll}>
                <BiSolidSelectMultiple size={25} />
            </button>

            <button
                id="save-list"
                className='btn'
                onClick={handleSaveList}
            >
                Save List
            </button>

            <button id="clear-all" className='btn' onClick={() => setShowConfirmationPopup(true)}>
                <VscClearAll size={25} />
            </button>

            {showConfirmationPopup && <div className="overlay" />}

            {showConfirmationPopup && (
                <ClearAllPopup 
                    onClearTodos={handleClearTodosConfirmed}
                    onCancel={handleClearAllCanceled}
                />
            )}
        </div>
    );
}

export default SaveList;
