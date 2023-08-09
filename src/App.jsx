import React, { useEffect, useState } from 'react';
import './App.css';
import InputForm from './components/InputForm';
import BottomNav from './components/BottomNav';
import GroceryList from './components/GroceryList';
import Nav from './components/Nav';
import { FaPencilAlt } from 'react-icons/fa';
import SideNav from './components/SideNav';

function App() {
  const [todos, setTodos] = useState(() => {
    const storedTools = localStorage.getItem('todos');
    return storedTools ? JSON.parse(storedTools) : [];
  });

  const [listName, setListName] = useState(() => {
    const storedListName = localStorage.getItem('listName');
    return storedListName ? JSON.parse(storedListName) : 'List #1';
  });

  const [editingListName, setEditingListName] = useState(false);

  // const [selectedList, setSelectedList] = useState(null);

  const handleSelectAll = () => {
    const hasUncheckedItems = todos.some(todo => !todo.completed);

    setTodos(currentTodos =>
      currentTodos.map(todo => ({ ...todo, completed: hasUncheckedItems })));
  };

  const handleCreateNewList = () => {
    setTodos([]);
    setListName('New List');
  };

  const [isEditingListName, setIsEditingListName] = useState(false);

  const enterEditListNameMode = () => {
    setIsEditingListName(true);
  };

  // useEffect will monitor changes to 'todos' and 'listName' and save them to local storage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    localStorage.setItem('listName', JSON.stringify(listName));
  }, [listName]);

  useEffect(() => {
    if (!isEditingListName && listName.trim() === '') {
      setListName('New List');
    }
  }, [isEditingListName, listName]);

  const [showSideNav, setShowSideNav] = useState(false);
  const [savedLists, setSavedLists] = useState(() => {
    const storedLists = localStorage.getItem('savedLists');
    return storedLists ? JSON.parse(storedLists) : [];
  });

  function handleCompleteItem(id) {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function handleDeleteItem(id) {
    setTodos((currentTodos) =>
      currentTodos.filter((todo) => todo.id !== id)
    );
  }

  function handleListNameChange(e) {
    setListName(e.target.value);
  }

  function handleListNameKeyPress(e) {
    if (e.key === 'Enter') {
      setIsEditingListName(false);
    }
  }

  function handleListNameBlur() {
    if (listName.trim() === '') {
      setListName('List #1');
    }
    setIsEditingListName(false);
  }

  return (
    <>
        <Nav setShowSideNav={setShowSideNav} />
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
              className=" bg-white rounded-md w-[96%] text-[#354F] text-4xl font-bold text-center"
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

        <InputForm setTodos={setTodos} />

        <GroceryList
          todos={todos}
          handleCompleteItem={handleCompleteItem}
          handleDeleteItem={handleDeleteItem}
          setTodos={setTodos}
          handleSelectAll={handleSelectAll}
          setSavedLists={setSavedLists}
          listName={listName}
          // selectedList={selectedList}
        />

        <BottomNav
        setShowSideNav={setShowSideNav}
        handleCreateNewList={handleCreateNewList}
        enterEditListNameMode={enterEditListNameMode}
        />

        <SideNav
          showSideNav={showSideNav}
          savedLists={savedLists}
          setSavedLists={setSavedLists}
          setShowSideNav={setShowSideNav}
          // setSelectedList={setSelectedList}
          listName={listName}
        />


    </>
  );
}

export default App;
