'use strict'

import React, {Component} from 'react';
import Grid from '../grid/grid';
import Button from '../button/button';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.keyHandler = this.keyHandler.bind(this);
  }

  keyHandler(e) {
    if(e.key === 'Enter')
      if(e.shiftKey)
        this.props.handleSearch()
      else
        this.props.handleAdd();
    else if(e.key === 'Escape')
      this.props.handleClear();
  }

  render() {
    return (
      <div role='form' className='todoForm'>
        <Grid xs='12' sm='9' md='10'>
          <input id='description' className='form-control' placeholder='Add a todo' 
            value={this.props.description} onChange={this.props.handleChange} 
            onKeyUp={this.keyHandler} />
        </Grid>
        <Grid xs='12' sm='3' md='2'>
          <Button style='primary' icon='plus' onClick={this.props.handleAdd} />
          <Button style='info' icon='search' onClick={this.props.handleSearch} />
          <Button style='danger' icon='close' onClick={this.props.handleClear} />
        </Grid>
      </div>
    );
  }
};

export default TodoForm;