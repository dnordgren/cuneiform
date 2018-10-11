import createModal from '../util/createModal';

chrome.runtime.onMessage.addListener(
  (message: any): void => {
    if (!message.type) {
      return;
    }

    switch(message.type) {
      case 'toggleOverlay':
        // TODO disableOverlay
        if (!message.overlayEnabled) {
          // TODO find all matching documentation IDs; render in beacons
          createModal();
        }
        break;
      default:
        return;
    }
  }
);
