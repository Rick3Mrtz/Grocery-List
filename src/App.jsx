import React, { useRef, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import InputForm from './components/InputForm';
import BottomNav from './components/BottomNav';
import GroceryList from './components/GroceryList';
import Nav from './components/Nav';
import SideNav from './components/SideNav';
import GridLayout from './components/GridLayout';
import Home from './components/Home';
import TitleInput from './components/TitleInput';
import SaveList from './components/SaveList';

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

  const todosLength = todos.length;

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

  const inputRef = useRef(null);

  const enterEditListNameMode = () => {
    setIsEditingListName(true);
    if (inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  };

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

  console.log('todosLength:', todosLength);

  return (
    <Router>
      <Nav
        handleListNameBlur={handleListNameBlur}
        setIsEditingListName={setEditingListName}
        enterEditListNameMode={enterEditListNameMode}
        inputRef={inputRef}
      />

      <BottomNav
        savedLists={savedLists}
        setShowSideNav={setShowSideNav}
        handleCreateNewList={handleCreateNewList}
        enterEditListNameMode={enterEditListNameMode}
        inputRef={inputRef}
      />

      <SideNav
        showSideNav={showSideNav}
        savedLists={savedLists}
        setSavedLists={setSavedLists}
        setShowSideNav={setShowSideNav}
        // setSelectedList={setSelectedList}
        listName={listName}
      />

      <Routes>
        <Route
          path='/'
          element={
            <>
              <TitleInput
                isEditingListName={isEditingListName}
                listName={listName}
                handleListNameChange={handleListNameChange}
                handleListNameBlur={handleListNameBlur}
                handleListNameKeyPress={handleListNameKeyPress}
                setIsEditingListName={setIsEditingListName}
                inputRef={inputRef}
              />

<InputForm setTodos={setTodos} />

<GroceryList
  todos={todos}
  handleCompleteItem={handleCompleteItem}
  handleDeleteItem={handleDeleteItem}
  setTodos={setTodos}
  handleSelectAll={handleSelectAll}
  setSavedLists={setSavedLists}
  listName={listName}
/>

{todosLength > 0 && (
        <SaveList
          todos={todos}
          setTodos={setTodos}
          setSavedLists={setSavedLists}
          listName={listName}
          handleSelectAll={handleSelectAll}
        />
      )}
</>
          }
        />

        <Route path="/grid" element={
            <GridLayout
              savedLists={savedLists}
            />
        }
        />

      </Routes>
    </Router>
  );
}

export default App;