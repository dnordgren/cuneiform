import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as ReactModal from 'react-modal';
import Modal from '../views/shared/modal/modal';

const createModal = (): void => {
  // Create a div at the end of the page that we can render our Modal into.
  const appNode = document.createElement('div');
  appNode.setAttribute('id', '#cuneiform-modal');
  document.body.appendChild(appNode);

  ReactModal.setAppElement(appNode);
  ReactDOM.render(React.createElement(Modal), appNode);
};

export default createModal;
