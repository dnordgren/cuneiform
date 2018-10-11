import createModal from '../util/createModal';

import ChromeMessage from '../messages/chromeMessage';
import ChromeMessageTypes from '../messages/chromeMessageTypes';

chrome.runtime.onMessage.addListener(
  (message: ChromeMessage): void => {
    if (!message.type) {
      return;
    }

    switch(message.type) {
      case ChromeMessageTypes.ToggleOverlay:
        // TODO disableOverlay
        if (!(message.payload && message.payload.overlayEnabled)) {
          // TODO find all matching documentation IDs; render in beacons

          createModal();
        }
        break;
      default:
        return;
    }
  }
);
