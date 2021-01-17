import * as React from 'react';

import Button from '../shared/button/button';

import { getColor } from '../../util/chromeStorage';

import { createToggleOverlayMessage } from '../../messages/messageCreators';
import sendMessage from '../../messages/sendMessage';

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
    const toggleOverlayChromeMessage = createToggleOverlayMessage(this.state.overlayEnabled);
    sendMessage(toggleOverlayChromeMessage);

    this.setState((prevState: State) => {
      return {
        overlayEnabled: !prevState.overlayEnabled,
      };
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
