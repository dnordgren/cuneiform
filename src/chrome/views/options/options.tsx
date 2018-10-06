import * as React from 'react';

import { setColor } from '../../util/chromeStorage';

const optionButtonColors = [
  '#3aa757',
  '#e8453c',
  '#f9bb2d',
  '#4688f1',
];

const optionButtonStyle = {
  height: '30px',
  width: '30px',
  outline: 'none',
  margin: '10px',
};

export default class OptionsPage extends React.Component {
  render() {
    const buttons = optionButtonColors.map(color => (
      <button
        key={`btn-${color}`}
        onClick={
          () => {
            setColor(color);
          }
        }
        style={{
          ...optionButtonStyle,
          backgroundColor: color,
        }}
      />
    ));

    return buttons;
  }
}
