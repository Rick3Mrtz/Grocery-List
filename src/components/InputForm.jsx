import { useState } from 'react'

function InputForm({ setTodos }) {

    const [newItem, setNewItem] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
    
        setTodos((currentTodos) => {
          return [
            ...currentTodos,
            { id: crypto.randomUUID(), title: newItem, completed: false},
          ]
        })
    
        setNewItem("")
      }

    return (
        <>
            <form onSubmit={handleSubmit} className='new-item-form'>
                <input className='w-[70vw] h-[40px] my-4 max-w-[17rem]'
                    type='text'
                    id='item'
                    placeholder='   Need Anything?'
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                >
                </input>
                <button className=' btn'>Add</button>
            </form>
        </>
    )
}

export default InputForm;