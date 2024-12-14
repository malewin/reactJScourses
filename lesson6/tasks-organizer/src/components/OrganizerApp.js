import React from 'react';
import { FilterProvider } from '../contexts/FilterContext';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import TodoFilter from './TodoFilter';

const OrganizerApp = () => {
    return (
        <FilterProvider>
          <AddTodo />
          <TodoList />
          <TodoFilter />
        </FilterProvider>
      );
};

export default OrganizerApp;