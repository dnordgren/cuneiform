import * as React from 'react';
import * as ReactModal from 'react-modal';

import { ModalProps } from './index';

export default class Modal extends React.Component<ModalProps> {
  render () {
    return (
      <ReactModal
        isOpen={this.props.isOpen}
      >
        <h2>{this.props.title}</h2>
        <p>{this.props.body}</p>
      </ReactModal>
    );
  }
}
