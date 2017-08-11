'use strict'

import constants from './constants';

export function selectTab(tabId) {
  return {
    type: constants.tabSelected,
    payload: tabId
  };
}

export function showTabs(...tabIds) {
  const tabsToShow = {};
  tabIds.forEach(id => tabsToShow[id] = true);
  return {
    type: constants.tabShowed,
    payload: tabsToShow
  };
}