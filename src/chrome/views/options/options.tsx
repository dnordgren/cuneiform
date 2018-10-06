import * as React from 'react';

const optionButtonColors = [
  '#3aa757',
  '#e8453c',
  '#f9bb2d',
  '#4688f1',
];

export default class OptionsPage extends React.Component {
  render() {
    const buttons = optionButtonColors.map(color => (
      <p key={`btn-${color}`}>
        <button
          onClick={
            () => {
              chrome.storage.sync.set({ color });
              console.log(`Set color to ${color}`);
            }
          }
          style={{ backgroundColor: color }}
        >
        </button>
      </p>
    ));

    return buttons;
  }
}
