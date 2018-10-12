import { createStore } from 'redux';

import createModal from '../util/createModal';

import { toggleOverlayEnabled } from '../store/actions/toggleOverlayEnabled';
import reducers from '../store/index';

import ChromeMessage from '../messages/chromeMessage';
import ChromeMessageTypes from '../messages/chromeMessageTypes';

let overlayInitialized = false;

const store = createStore(reducers);

chrome.runtime.onMessage.addListener(
  (message: ChromeMessage): void => {
    if (!message.type) {
      return;
    }

    switch(message.type) {
      case ChromeMessageTypes.ToggleOverlay:
        // TODO disableOverlay
        if (
          !(message.payload && message.payload.overlayEnabled)
          && !overlayInitialized
        ) {
          // TODO find all matching documentation IDs; render in beacons

          createModal(store);
          overlayInitialized = true;
        }
        store.dispatch(toggleOverlayEnabled());
        break;
      default:
        return;
    }
  }
);
