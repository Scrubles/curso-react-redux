'use strict'

import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {changeDescription, clearDescription, add, list} from './todoActions';

import Grid from '../grid/grid';
import Button from '../button/button';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.keyHandler = this.keyHandler.bind(this);
  }

  componentWillMount() {
    this.props.list();
  }

  keyHandler(e) {
    const {description, clearDescription, add, list} = this.props;
    if(e.key === 'Enter')
      if(e.shiftKey)
        list(description)
      else
        add(description);
    else if(e.key === 'Escape')
      clearDescription();
  }

  render() {
    const {description, changeDescription, clearDescription, add, list} = this.props;
    return (
      <div role='form' className='todoForm'>
        <Grid xs='12' sm='9' md='10'>
          <input id='description' className='form-control' placeholder='Add a todo' 
            value={description} onChange={(e) => changeDescription(e.target.value)} 
            onKeyUp={this.keyHandler} />
        </Grid>
        <Grid xs='12' sm='3' md='2'>
          <Button style='primary' icon='plus' onClick={() => add(description)} />
          <Button style='info' icon='search' onClick={() => list(description)} />
          <Button style='danger' icon='close' onClick={clearDescription} />
        </Grid>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  description: state.todo.description
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  changeDescription,
  clearDescription,
  add,
  list
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);