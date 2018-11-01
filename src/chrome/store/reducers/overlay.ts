import { ActionKeys, ActionTypes } from '../actions/actionTypes';
import { OverlayState } from '../stateTypes';

const initialState: OverlayState = {
  enabled: false,
  title: 'Cuneiform: Documentation on your Product',
  body: 'Register Beacons on your site in order to see documentation about your product here.',
};

const overlay = (
  state: OverlayState = initialState,
  action: ActionTypes,
): OverlayState => {
  switch(action.type) {
    case ActionKeys.ToggleOverlayEnabled:
      return { ...state, enabled: !state.enabled };

    case ActionKeys.SetOverlayTitle:
      if (!(action.payload && action.payload.title)) {
        return state;
      }

      return { ...state, title: action.payload.title };

    case ActionKeys.SetOverlayBody:
      if (!(action.payload && action.payload.body)) {
        return state;
      }

      return { ...state, body: action.payload.body };

    default:
      return state;
  }
};

export {
  overlay,
};
