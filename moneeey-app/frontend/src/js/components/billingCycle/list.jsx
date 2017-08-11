'use strict'

import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {showUpdate, showDelete} from "./actions";

class List extends Component {
  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Month</th>
              <th>Year</th>
              <th className="table-actions">Actions</th>
            </tr>
          </thead>
          <tbody>
            {(this.props.list || []).map(billingCycle => (
              <tr key={billingCycle._id}>
                <td>{billingCycle.name}</td>
                <td>{billingCycle.month}</td>
                <td>{billingCycle.year}</td>
                <td>
                  <div className="btn-toolbar">
                    <div className="btn-group">
                      <button className="btn btn-warning" 
                        onClick={() => this.props.showUpdate(billingCycle)}>
                        <i className="fa fa-pencil" />
                      </button>
                    </div>
                    <div className="btn-group">
                      <button className="btn btn-danger" 
                        onClick={() => this.props.showDelete(billingCycle)}>
                        <i className="fa fa-trash-o" />
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  list: state.billingCycle.list
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  showUpdate,
  showDelete
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(List);