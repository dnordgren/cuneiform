import * as React from 'react';

import {
  Button,
  Flex,
} from 'rebass';

import { setColor } from '../../util/chromeStorage';

const optionButtonColors = [
  '#55a734',
  '#c91a1a',
  '#ffdd00',
  '#2d83c9',
  '#621296',
  '#ff9000',
];

export default class OptionsPage extends React.Component {
  setColor = (color: string): void => {
    setColor(color);
  }

  render () {
    const flexAlignment = { x: 3, y: 4 };
    const buttonConfig = { mr: 2, height: '36px', width: '72px' };
    const buttons = optionButtonColors.map(color => (
      <Button
        bg={color}
        {...buttonConfig}
        // tslint:disable-next-line:jsx-no-lambda
        onClick={() => setColor(color)}
        key={`btn-${color}`}
      />
    ));

    return (
      <Flex
        alignItems="center"
        px={flexAlignment.x}
        py={flexAlignment.y}
        bg="muted"
      >
        {buttons}
      </Flex>
    );
  }
}
