'use strict'

import React, {Component} from 'react';
import If from '../logic/if';
import Button from '../button/button';

class TodoList extends Component {
  renderRows() {
    const list = this.props.list || [];
    return list.map(todo => (
      <tr key={todo._id}>
        <td className={todo.done ? 'done' : ''}>{todo.description}</td>
        <td>
          <If test={!todo.done}>
            <Button style='success' icon='check' onClick={() => this.props.handleMarkAsDone(todo)} />
          </If>
          <If test={todo.done}>
            <Button style='warning' icon='undo' onClick={() => this.props.handleMarkAsPending(todo)} />
          </If>
          <Button style='danger' icon='trash-o' onClick={() => this.props.handleRemove(todo)} />
        </td>
      </tr>
    ));
  }

  render() {
    return (
      <table className='table'>
        <thead>
          <tr>
            <th>Description</th>
            <th className='tableActions'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {this.renderRows()}
        </tbody>
      </table>
    );
  }
};

export default TodoList;