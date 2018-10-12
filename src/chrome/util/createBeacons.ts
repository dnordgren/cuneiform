import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Beacon from '../views/shared/beacon/beacon';

// https://developer.chrome.com/home
const chromeDevDomIds = [
  'logo',
  'site-sections',
  'developer-news',
];

const createBeacons = (): void => {
  chromeDevDomIds.forEach(id => {
    const targetNode = document.getElementById(id);
    if (!targetNode) {
      return;
    }

    const {
      top: nodeTop,
      left: nodeLeft,
    } = targetNode.getBoundingClientRect();

    const beaconNode = document.createElement('div');
    beaconNode.setAttribute('id', `cuneiform-beacon-${id}`);
    beaconNode.style.position = 'absolute';
    beaconNode.style.top = `${nodeTop}px`;
    beaconNode.style.left = `${nodeLeft}px`;

    // Ensure the new node appear on top of the target element.
    const targetNodeZIndex = targetNode.style.zIndex && parseInt(targetNode.style.zIndex, 10);
    if (targetNodeZIndex && !isNaN(targetNodeZIndex)) {
      beaconNode.style.zIndex = `${targetNodeZIndex + 1}`;
    }

    targetNode.insertAdjacentElement('afterend', beaconNode);

    ReactDOM.render(
      React.createElement(Beacon),
      beaconNode,
    );
  });
};

export default createBeacons;
