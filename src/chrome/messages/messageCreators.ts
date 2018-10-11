import ChromeMessage from './chromeMessage';
import chromeMessageTypes from './chromeMessageTypes';

const createToggleOverlayMessage = (overlayEnabled: boolean): ChromeMessage => ({
  type: chromeMessageTypes.ToggleOverlay,
  payload: {
    overlayEnabled,
  },
});

export {
  createToggleOverlayMessage,
};
