'use strict'

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import If from '../logic/if';
import {selectTab} from './actions';

class TabHeader extends Component {
  render() {
    const {target, icon, label, selectTab} = this.props;
    const selected = this.props.tab.selected === target;
    const visible = this.props.tab.visible[target];
    return (
      <If test={visible}>
        <li className={selected ? 'active' : ''}>
          <a href="javascript:void(0)" data-toggle="tab" data-target={target}
            onClick={() => {selectTab(target)}}>
            <i className={icon} /> {label}
          </a>
        </li>
      </If>
    );
  }
};

const mapStateToProps = (state) => ({
  tab: state.tab
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  selectTab
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TabHeader);