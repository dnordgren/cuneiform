import { ActionKeys, ActionTypes } from '../actions/actionTypes';
import { OverlayState } from '../stateTypes';

const initialState: OverlayState = {
  enabled: false,
};

const overlay = (
  state: OverlayState = initialState,
  action: ActionTypes,
): OverlayState => {
  switch(action.type) {
    case ActionKeys.ToggleOverlayEnabled:
      return { ...state, enabled: !state.enabled };
    default:
      return state;
  }
};

export {
  overlay,
};
