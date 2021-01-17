import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Popup from './popup';

const appNode = document.getElementById('popup-app');
ReactDOM.render(
  React.createElement(Popup),
  appNode,
);
