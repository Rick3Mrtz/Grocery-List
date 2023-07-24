import react from 'react'
import './App.css'

function App() {


  return (
    <>

      <h1 className='flex text-4xl justify-center mt-[6vh] mb-[3vh]'>
        Brick's Grocery List
      </h1>

      <form className='new-item-form'>
        {/* <label className='ml-2' htmlFor='item'>New Item</label> */}
        <input className='w-[70vw] h-[40px] my-4' type='text' id='item' placeholder='Need Anything?'>
        </input>
        <button className=' btn'>Add</button>
      </form>

      <div className='grid grid-cols-2 gap-2 mt-10'>
        {/* Left Column - Groceries to Buy */}
        <div className='bg-gray-200 p-4 ml-4 h-fit'>
          <h1 className='text-xl text-center'>Groceries we need</h1>
          <div className='flex justify-center items-center'>

          </div>
          <ul className=' mt-10 list flex justify-start items-center'>
            <li>
              <label>
                <input type="checkbox" className='mr-4' />
                Apples
              </label>
            </li>
          </ul>

        </div>

        {/* Right Column - Groceries Bought Already */}
        <div className='bg-green-200 p-4 mr-4 h-fit'>
          <h1 className='text-xl text-center'>Groceries we bought</h1>
        </div>
      </div>


    </>
  )
}

export default App
