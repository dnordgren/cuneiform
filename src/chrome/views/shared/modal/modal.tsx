import * as React from 'react';
import * as ReactModal from 'react-modal';

interface Props {
  isOpen: boolean;
}

export default class Modal extends React.Component<Props> {
  render () {
    return (
      <ReactModal
        isOpen={true}
      >
        <h2>Hello!</h2>
        <p>This is documentation by Cuneiform</p>
      </ReactModal>
    );
  }
}
