import * as React from 'react';

import Button from '../shared/button/button';

import { setColor } from '../../util/chromeStorage';

const optionButtonColors = [
  '#3aa757',
  '#e8453c',
  '#f9bb2d',
  '#4688f1',
];

export default class OptionsPage extends React.Component {
  render () {
    const buttons = optionButtonColors.map(color => (
      <Button
        color={color}
        key={`btn-${color}`}
        onClick={() => {
          setColor(color);
        }}
      />
    ));

    return buttons;
  }
}
