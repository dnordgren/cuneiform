import * as React from 'react';

import Button from '../shared/button/button';

import { getColor } from '../../util/chromeStorage';

export default class Popup extends React.Component {
  state = {
    buttonColor: '#000000',
  };

  componentDidMount (): void {
    getColor((color: string) => {
      this.setState(() => ({
        buttonColor: color,
      }));
    });

    this.firePopupAlert();
  }

  firePopupAlert = (): void => {
    chrome.tabs.query({
      active: true, currentWindow: true
    }, (tabs: Array<chrome.tabs.Tab>) => {
      const activeTabId = tabs[0].id;
      if (!activeTabId) {
        return;
      }
      chrome.tabs.sendMessage(activeTabId, {
        msg: 'yo',
      });
    });
  }

  setTabColor = (): void => {
    chrome.tabs.query({
      active: true, currentWindow: true
    }, (tabs: Array<chrome.tabs.Tab>) => {
      const tabId = tabs[0].id;
      if (!tabId) {
        return;
      }
      chrome.tabs.executeScript(
        tabId,
        { code: `document.body.style.backgroundColor = '${this.state.buttonColor}';` }
      );
    });
  }

  render () {
    return (
      <Button
        color={this.state.buttonColor}
        onClick={this.setTabColor}
      />
    );
  }
}
