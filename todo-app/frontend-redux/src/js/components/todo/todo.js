'use strict'

import React, {Component} from 'react';

import TodoForm from './todoForm';
import TodoList from './todoList';

import PageHeader from '../navigation/pageHeader';

class Todo extends Component {
  render() {
    return (
      <div>
        <PageHeader name='Todo List' />
        <TodoForm />
        <TodoList />
      </div>
    );
  }
};

export default Todo;