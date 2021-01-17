import { ActionKeys, SetOverlayBody } from './actionTypes';

const setOverlayBody = (body: string): SetOverlayBody => ({
  type: ActionKeys.SetOverlayBody,
  payload: {
    body,
  },
});

export {
  setOverlayBody,
};
