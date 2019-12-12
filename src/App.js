import React from 'react';
import TodoList from './containers/TodoList';
import AddNewItem from './containers/AddNewItem';
import ClearList from './containers/ClearList';
import './App.css';

const App = () => (
  <div>
      <h1 class="text-center">To-do</h1>
      <TodoList />
      <AddNewItem />
      <ClearList />
  </div>
)

export default App;
