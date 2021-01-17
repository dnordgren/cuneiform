import { ActionKeys, SetOverlayTitle } from './actionTypes';

const setOverlayTitle = (title: string): SetOverlayTitle => ({
  type: ActionKeys.SetOverlayTitle,
  payload: {
    title,
  },
});

export {
  setOverlayTitle,
};
