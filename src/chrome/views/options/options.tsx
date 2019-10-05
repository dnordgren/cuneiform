import * as React from 'react';

import Button from '../shared/button/button';

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
    const buttons = optionButtonColors.map(color => (
      <Button
        color={color}
        key={`btn-${color}`}
        onClick={setColor}
      />
    ));

    return buttons;
  }
}
