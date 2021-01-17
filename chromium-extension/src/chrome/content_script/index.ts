import createBeacons from '../util/createBeacons';
import createModal from '../util/createModal';

import { toggleOverlayEnabled } from '../store/actions/toggleOverlayEnabled';
import { getStore } from '../store/index';

import ChromeMessage from '../messages/chromeMessage';
import ChromeMessageTypes from '../messages/chromeMessageTypes';

let overlayInitialized = false;

const store = getStore();

chrome.runtime.onMessage.addListener(
  (message: ChromeMessage): void => {
    if (!message.type) {
      return;
    }

    switch(message.type) {
      case ChromeMessageTypes.ToggleOverlay:
        if (
          !(message.payload && message.payload.overlayEnabled)
          && !overlayInitialized
        ) {
          initializeOverlay();

          return;
        }
        store.dispatch(toggleOverlayEnabled());
        break;
      default:
        return;
    }
  }
);

const initializeOverlay = (): void => {
  createBeacons();
  createModal(store);
  overlayInitialized = true;
};
