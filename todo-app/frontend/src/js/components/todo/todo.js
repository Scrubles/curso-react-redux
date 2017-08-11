'use strict'

import React, {Component} from 'react';
import axios from 'axios';
import PageHeader from '../navigation/pageHeader';
import TodoForm from './todoForm';
import TodoList from './todoList';

const API_URL = 'http://localhost:3000/api/todos'

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      list: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleMarkAsDone = this.handleMarkAsDone.bind(this);
    this.handleMarkAsPending = this.handleMarkAsPending.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.list = this.list.bind(this);
    this.list();
  }
  
  handleChange(e) {
    this.setState({...this.state, description: e.target.value});
  }

  handleAdd() {
    const description = this.state.description;
    axios.post(API_URL, {description}).then((response) => {
      this.list();
    });
  }

  handleEdit(todo) {
    axios.put(`${API_URL}/${todo._id}`, todo).then((response) => {
      this.list(this.state.description);
    });
  }

  handleMarkAsDone(todo) {
    this.handleEdit({...todo, done: true});
  }

  handleMarkAsPending(todo) {
    this.handleEdit({...todo, done: false});
  }

  handleRemove(todo) {
    axios.delete(`${API_URL}/${todo._id}`).then((response) => {
      this.list(this.state.description);
    });
  }
  
  handleSearch() {
    this.list(this.state.description);
  }

  handleClear() {
    this.list();
  }

  list(description = '') {
    const search = description ? `&description__regex=/${description}/` : '';
    axios.get(`${API_URL}?sort=-createdAt${search}`).then((response) => {
      this.setState({...this.state, description: description, list: response.data});
    });
  }

  render() {
    return (
      <div>
        <PageHeader name='Todo List' />
        <TodoForm description={this.state.description} handleChange={this.handleChange} 
          handleAdd={this.handleAdd} handleSearch={this.handleSearch} 
          handleClear={this.handleClear} />
        <TodoList list={this.state.list} handleRemove={this.handleRemove} 
          handleMarkAsDone={this.handleMarkAsDone} handleMarkAsPending={this.handleMarkAsPending} />
      </div>
    );
  }
};

export default Todo;