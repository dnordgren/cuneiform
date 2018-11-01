import {
  combineReducers,
  createStore,
  Dispatch as ReduxDispatch,
  Store,
} from 'redux';

import { ActionTypes } from './actions/actionTypes';
import { overlay } from './reducers/overlay';
import { AppState } from './stateTypes';

type Dispatch = ReduxDispatch<ActionTypes>;

const reducers = combineReducers<AppState>({
  overlay,
});

let store: Store;
const getStore = () => {
  if (!store) {
    store = createStore(reducers);
  }

  return store;
};

export  {
  AppState,
  Dispatch,
  getStore,
  reducers,
};
