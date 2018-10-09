import * as React from 'react';

import Button from '../shared/button/button';

import { getColor } from '../../util/chromeStorage';

export default class Popup extends React.Component {
  state = {
    buttonColor: '#000000',
  };

  componentDidMount () {
    getColor((color: string) => {
      this.setState(() => ({
        buttonColor: color,
      }));
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
