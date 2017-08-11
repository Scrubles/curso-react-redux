'use strict'

import React, {Component} from 'react';

import If from '../logic/if';

class FormGroup extends Component {
  render() {
    const {input, name, label, placeholder, readOnly, type} = this.props;
    return (
      <div className="form-group">
        <If test={!!label}>
          <label htmlFor={name}>{label} </label>
        </If>
        <input {...input} className="form-control" placeholder={placeholder ? placeholder : label} 
          readOnly={readOnly} type={type} />
      </div>
    );
  }
};

export default FormGroup;