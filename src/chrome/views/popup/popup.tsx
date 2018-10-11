import * as React from 'react';

import Button from '../shared/button/button';

import { getColor } from '../../util/chromeStorage';

interface State {
  buttonColor: string;
  overlayEnabled: boolean;
}

export default class Popup extends React.Component<{}, State> {
  state = {
    buttonColor: '#000000',
    overlayEnabled: false,
  };

  componentDidMount (): void {
    getColor((color: string) => {
      this.setState(() => ({
        buttonColor: color,
      }));
    });
  }

  toggleOverlay = (): void => {
    chrome.tabs.query({
      active: true, currentWindow: true
    }, (tabs: Array<chrome.tabs.Tab>) => {
      const activeTabId = tabs[0].id;
      if (!activeTabId) {
        return;
      }

      // TODO abstract into FSA-style TS-ified messaging util
      chrome.tabs.sendMessage(activeTabId, {
        type: 'toggleOverlay',
        overlayEnabled: this.state.overlayEnabled,
      });

      this.setState((prevState: State) => {
        return {
          overlayEnabled: !prevState.overlayEnabled,
        };
      });
    });
  }

  render () {
    return (
      <Button
        color={this.state.buttonColor}
        onClick={this.toggleOverlay}
      />
    );
  }
}
