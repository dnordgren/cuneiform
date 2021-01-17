import * as React from 'react';

const buttonStyles = {
  height: '30px',
  margin: '10px',
  outline: 'none',
  width: '30px',
};

interface Props {
  color: string;
  onClick: (color: string) => void;
}

export default class Button extends React.Component<Props> {
  setColor = (): void => {
    this.props.onClick(this.props.color);
  }

  render () {
    return (
      <button
        onClick={this.setColor}
        style={{
          ...buttonStyles,
          backgroundColor: this.props.color,
        }}
      />
    );
  }
}
