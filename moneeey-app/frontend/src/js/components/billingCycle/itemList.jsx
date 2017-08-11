'use strict'

import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Field, arrayInsert, arrayRemove} from 'redux-form';

import {getList, showUpdate, showDelete} from "./actions";

import Row from '../common/grid/row';
import Column from '../common/grid/column';
import FormGroup from '../common/form/formGroup';
import If from '../common/logic/if';

class List extends Component {
  add(index, item = {}) {
    this.props.arrayInsert('billingCycleForm', this.props.field, index, item);
  }

  remove(index) {
    if(this.props.list.length > 1)
      this.props.arrayRemove('billingCycleForm', this.props.field, index);
  }

  render() {
    const {list, readOnly, field, legend, showStatus} = this.props;
    return (
      <fieldset>
        <legend>{legend}</legend>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Value</th>
              <If test={showStatus}>
                <th>Status</th>
              </If>
              <If test={!readOnly}>
                <th className="table-actions">Actions</th>
              </If>
            </tr>
          </thead>
          <tbody>
            {
              (list || []).map((item, i) => (
                <tr key={i}>
                  <td>
                    <Field component={FormGroup} name={`${field}[${i}].name`} placeholder="Name"
                      readOnly={readOnly} />
                  </td>
                  <td>
                    <Field component={FormGroup} name={`${field}[${i}].value`} placeholder="Value"
                      type="number" readOnly={readOnly} />
                  </td>
                  <If test={showStatus}>
                    <td>
                      <Field component={FormGroup} name={`${field}[${i}].status`} placeholder="Status"
                        readOnly={readOnly} />
                    </td>
                  </If>
                  <If test={!readOnly}>
                    <td>
                      <div className="btn-toolbar">
                        <div className="btn-group">
                          <button type="button" className="btn btn-success" 
                            onClick={() => this.add(i+1)}>
                            <i className="fa fa-plus" />
                          </button>
                        </div>
                        <div className="btn-group">
                          <button type="button" className="btn btn-warning" 
                            onClick={() => this.add(i+1, item)}>
                            <i className="fa fa-clone" />
                          </button>
                        </div>
                        <div className="btn-group">
                          <button type="button" className="btn btn-danger" 
                            onClick={() => this.remove(i)}>
                            <i className="fa fa-trash-o" />
                          </button>
                        </div>
                      </div>
                    </td>
                  </If>
                </tr>
              ))
            }
          </tbody>
        </table>
      </fieldset>
    );
  }
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  arrayInsert,
  arrayRemove
}, dispatch);
export default connect(null, mapDispatchToProps)(List);