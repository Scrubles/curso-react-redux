'use strict'

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {getSummary} from './actions';

import Content from "../common/content/content";
import Row from '../common/grid/row';
import Column from '../common/grid/column';
import ValueBox from '../common/widget/valueBox';

class Dashboard extends Component {
  componentWillMount() {
    this.props.getSummary();
  }

  render() {
    const {credit, debt} = this.props.summary;
    return (
      <Content title="Dashboard">
        <Row>
          <Column xs="12" sm="4">
            <ValueBox color="green" icon="bank" value={`R$ ${credit.toFixed(2)}`} text="Credits Total" />
          </Column>
          <Column xs="12" sm="4">
            <ValueBox color="red" icon="credit-card" value={`R$ ${debt.toFixed(2)}`} text="Debst Total" />
          </Column>
          <Column xs="12" sm="4">
            <ValueBox color="blue" icon="money" value={`R$ ${(credit - debt).toFixed(2)}`} 
              text="Consolidated value" />
          </Column>
        </Row>
      </Content>
    );
  }
};

const mapStateToProps = (state) => ({
  summary: state.dashboard.summary
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getSummary
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);