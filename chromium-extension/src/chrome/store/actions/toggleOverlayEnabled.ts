import { ActionKeys, ToggleOverlayEnabled } from './actionTypes';

const toggleOverlayEnabled = (): ToggleOverlayEnabled => ({
  type: ActionKeys.ToggleOverlayEnabled,
});

export {
  toggleOverlayEnabled,
};
