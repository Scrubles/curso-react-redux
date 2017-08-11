'use strict'

import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {edit, remove} from './todoActions';

import If from '../logic/if';
import Button from '../button/button';

class TodoList extends Component {
  renderRows() {
    const {list, edit, remove} = this.props;
    return list.map(todo => (
      <tr key={todo._id}>
        <td className={todo.done ? 'done' : ''}>{todo.description}</td>
        <td>
          <If test={!todo.done}>
            <Button style='success' icon='check' 
              onClick={() => edit({...todo, done: true})} />
          </If>
          <If test={todo.done}>
            <Button style='warning' icon='undo' 
              onClick={() => edit({...todo, done: false})} />
          </If>
          <Button style='danger' icon='trash-o' onClick={() => remove(todo)} />
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

const mapStateToProps = (state) => ({
  list: state.todo.list
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  edit,
  remove
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);