import react from 'react'
import './App.css'
import { AiFillCheckCircle } from 'react-icons/ai'
import { VscClose } from 'react-icons/vsc'

function App() {


  return (
    <>

      <h1 className='flex text-4xl font-bold justify-center mt-[6vh] mb-[3vh]'>
        Brick's Grocery List
      </h1>

      <form className='new-item-form'>
        {/* <label className='ml-2' htmlFor='item'>New Item</label> */}
        <input className='w-[70vw] h-[40px] my-4' type='text' id='item' placeholder='Need Anything?'>
        </input>
        <button className=' btn'>Add</button>
      </form>

      
        {/* Groceries to Buy */}
        <div className='bg-gray-200 mx-8 p-4 h-fit mt-8'>
          <h1 className='text-xl text-center font-extrabold'>Groceries we need</h1>
          <ul className=' mt-6 list flex justify-start items-center'>
            <li className='text-3xl'>
              Apples
              <button>
              <AiFillCheckCircle size={30} color='green'/>
              </button>
              <button>
              <VscClose size={30} color='red' />
              </button>
            </li>
          </ul>

        </div>
    </>
  )
}

export default App








        {/* Right Column - Groceries Bought Already
        <div className='bg-green-200 p-4 mr-4 h-fit'>
          <h1 className='text-xl text-center font-extrabold'>Groceries we have</h1>

          <ul className=' mt-10 list flex justify-start items-center'>
            <li>
              <label>
                <input type="checkbox" className='mr-4' />
                Bananas
              </label>
            </li>
          </ul>


        </div> */}