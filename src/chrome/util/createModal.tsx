import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as ReactModal from 'react-modal';
import { Provider } from 'react-redux';
import { Store } from 'redux';

import Modal from '../views/shared/modal/index';

const createModal = (store: Store): void => {
  // Create a div at the end of the page that we can render our Modal into.
  const appNode = document.createElement('div');
  appNode.setAttribute('id', 'cuneiform-modal');
  document.body.appendChild(appNode);

  ReactModal.setAppElement(appNode);

  const app = (
    <Provider store={store}>
      <Modal/>
    </Provider>
  );

  ReactDOM.render(app, appNode);
};

export default createModal;
