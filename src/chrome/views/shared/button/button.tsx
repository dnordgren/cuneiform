import * as React from 'react';

const buttonStyles = {
  height: '30px',
  margin: '10px',
  outline: 'none',
  width: '30px',
};

interface Props {
  color: string;
  onClick: () => void;
}

export default class Button extends React.Component<Props> {
  render () {
    return (
      <button
        onClick={this.props.onClick}
        style={{
          ...buttonStyles,
          backgroundColor: this.props.color,
        }}
      />
    );
  }
}
