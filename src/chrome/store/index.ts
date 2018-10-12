import {
  combineReducers,
  Dispatch as ReduxDispatch,
} from 'redux';

import { ActionTypes } from './actions/actionTypes';
import { overlay } from './reducers/overlay';
import { AppState } from './stateTypes';

export type Dispatch = ReduxDispatch<ActionTypes>;

export default combineReducers<AppState>({
  overlay,
});
