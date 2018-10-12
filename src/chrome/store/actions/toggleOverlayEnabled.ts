import { ActionKeys, ToggleOverlayEnabled } from './actionTypes';

const toggleOverlayEnabled = (): ToggleOverlayEnabled => {
  return {
    type: ActionKeys.ToggleOverlayEnabled,
  };
};

export {
  toggleOverlayEnabled,
};
