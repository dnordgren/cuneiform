import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { getStore } from '../store/index';

import Beacon from '../views/shared/beacon/index';

interface SiteBeacon {
  domId: string;
  title: string;
  body: string;
}

// https://developer.chrome.com/home
const chromeDevBeacons: Array<SiteBeacon> = [
  {
    domId: 'logo',
    title: 'Logo',
    body: 'This is the logo.',
  },
  {
    domId: 'site-sections',
    title: 'Site Sections',
    body: 'Sections of the site.',
  },
  {
    domId: 'developer-news',
    title: 'Developer News',
    body: 'News for developers.',
  },
];

const createBeacons = (): void => {
  const store = getStore();
  chromeDevBeacons.forEach(siteBeacon => {
    const targetNode = document.getElementById(siteBeacon.domId);
    if (!targetNode) {
      return;
    }

    const {
      top: nodeTop,
      left: nodeLeft,
    } = targetNode.getBoundingClientRect();

    const beaconNode = document.createElement('div');
    beaconNode.setAttribute('id', `cuneiform-beacon-${siteBeacon.domId}`);
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
      <Provider store={store}>
        <Beacon
          title={siteBeacon.title}
          body={siteBeacon.body}
        />
      </Provider>,
      beaconNode,
    );
  });
};
export default createBeacons;
