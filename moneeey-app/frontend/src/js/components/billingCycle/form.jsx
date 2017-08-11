'use strict'

import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {reduxForm, Field, formValueSelector} from 'redux-form';

import {init} from './actions';
import ItemList from './itemList';
import Summary from './summary';

import Row from '../common/grid/row'
import Column from '../common/grid/column'
import FormGroup from '../common/form/formGroup'

class Form extends Component {
  calculateSummary() {
    const sum = (total, value) => total + value;
    return {
      sumOfCredits: this.props.credits.map(c => +c.value || 0).reduce(sum),
      sumOfDebts: this.props.debts.map(d => +d.value || 0).reduce(sum)
    };
  }

  render() {
    const {handleSubmit, readOnly, credits, debts, init} = this.props;
    const {sumOfCredits, sumOfDebts} = this.calculateSummary();
    return (
      <form role="form" onSubmit={handleSubmit}>
        <div className="box-body">
          <Row>
            <Column xs={12} sm={12} md={4}>
              <Field component={FormGroup} name="name" label="Name" readOnly={readOnly} />
            </Column>
            <Column xs={12} sm={12} md={4}>
            <Field component={FormGroup} name="month" label="Month" type="number" 
                readOnly={readOnly} />
              </Column>
            <Column xs={12} sm={12} md={4}>
              <Field component={FormGroup} name="year" label="Year" type="number" 
                readOnly={readOnly} />
            </Column>
          </Row>
          <Summary credit={sumOfCredits} debt={sumOfDebts} />
          <Row>
            <Column xs={12} sm={12} md={6}>
              <ItemList readOnly={readOnly} list={credits} field='credits' legend='Credits' />
            </Column>
            <Column xs={12} sm={12} md={6}>
              <ItemList readOnly={readOnly} list={debts} field='debts' legend='Debts' 
                showStatus={true} />
            </Column>
          </Row>
        </div>
        <div className="box-footer">
          <div className="btn-toolbar pull-right">
            <div className="btn-group">
              <button type="button" className="btn btn-danger" 
                onClick={init}>Cancel</button>
            </div>
            <div className="btn-group">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </div>
        </div>
      </form>
    );
  }
};

Form = reduxForm({form: 'billingCycleForm', destroyOnUnmount: false})(Form);
const selector = formValueSelector('billingCycleForm');
const mapStateToProps = (state) => ({
  credits: selector(state, 'credits'),
  debts: selector(state, 'debts')
});
const mapDispatchToProps = (dispatch) => bindActionCreators({
  init
}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Form);