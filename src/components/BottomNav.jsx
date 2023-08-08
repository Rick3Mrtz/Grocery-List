import React from 'react';
import { BsPlusCircleFill } from 'react-icons/bs';


function BottomNav() {
  return (
    <>
      <div className='plus-btn fixed bottom-0 right-0 mb-10 mr-10'>
        <BsPlusCircleFill size={50} color='#354f' />
      </div>
    </>
  )
}

export default BottomNav;
