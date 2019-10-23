import * as React from 'react';

import {
  Button,
  Flex,
  Heading,
} from 'rebass';

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
    const buttonText = `${this.state.overlayEnabled ? 'Disable' : 'Enable'} Overlay`;
    const headingFontSize = 5;
    const flexAlignment = { x: 3, y: 4 };

    return (
      <div style={{ height: '400px', width: '300px' }}>
        <Flex
          alignItems="center"
          px={flexAlignment.x}
          py={flexAlignment.y}
          bg="muted"
          flexDirection="column"
        >
          <Heading
            fontFamily="sans-serif"
            fontSize={headingFontSize}
          >
            Cuneiform
          </Heading>
          <Flex
            alignItems="center"
            px={flexAlignment.x}
            py={flexAlignment.y}
            bg="muted"
          >
            <Button
              bg={this.state.buttonColor}
              variant="primary"
              onClick={this.toggleOverlay}
            >
              {buttonText}
            </Button>
          </Flex>
        </Flex>
      </div>
    );
  }
}
