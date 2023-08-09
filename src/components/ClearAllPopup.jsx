import React from 'react';

function ClearAllPopup({ onClearTodos, onCancel }) {
  return (
    <>
    <div className="popup text-center">
        <h2 className='text-xl font-bold mb-2'>Clear All?</h2>
      <p className='mb-4 text-sm text-neutral-500 mx-4'>This will remove all items in your current list.</p>
      <div className="button-group flex justify-around">
        <button id='btn-yes' onClick={onClearTodos}>Yes</button>
        <button id='btn-no' onClick={onCancel}>No</button>
      </div>
    </div>
    </>
  );
}

export default ClearAllPopup;
