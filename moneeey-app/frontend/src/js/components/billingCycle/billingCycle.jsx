'use strict'

import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import List from "./list";
import Form from "./form";
import {add, edit, remove, init} from "./actions";

import Content from "../common/content/content";
import Tabs from "../common/tabs/tabs";
import TabsHeader from "../common/tabs/tabsHeader";
import TabHeader from "../common/tabs/tabHeader";
import TabsContent from "../common/tabs/tabsContent";
import TabContent from "../common/tabs/tabContent";

class BillingCycle extends Component {
  componentWillMount() {
    this.props.init();
  }

  render() {
    return (
      <Content title="Billing Cycles">
        <Tabs>
          <TabsHeader>
            <TabHeader label="List" icon="fa fa-bars" target="tabList" />
            <TabHeader label="Add" icon="fa fa-plus" target="tabCreate" />
            <TabHeader label="Edit" icon="fa fa-pencil" target="tabUpdate" />
            <TabHeader label="Delete" icon="fa fa-trash-o" target="tabDelete" />
          </TabsHeader>
          <TabsContent>
            <TabContent id="tabList">
              <List />
            </TabContent>
            <TabContent id="tabCreate">
              <Form onSubmit={this.props.add} />
            </TabContent>
            <TabContent id="tabUpdate">
              <Form onSubmit={this.props.edit} />
            </TabContent>
            <TabContent id="tabDelete">
              <Form onSubmit={this.props.remove} readOnly={true} />
            </TabContent>
          </TabsContent>
        </Tabs>
      </Content>
    );
  }
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  add,
  edit,
  remove,
  init
}, dispatch);

export default connect(null, mapDispatchToProps)(BillingCycle);