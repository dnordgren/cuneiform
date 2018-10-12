export enum ActionKeys {
  ToggleOverlayEnabled = 'ToggleOverlayEnabled',
}

export interface Action<P = null, M = null> {
  readonly type: ActionKeys;
  readonly payload?: P;
  readonly meta?: M;
  readonly error?: boolean;
}

export interface ToggleOverlayEnabled extends Action<{}> {
  type: ActionKeys.ToggleOverlayEnabled;
}

export type ActionTypes =
  | ToggleOverlayEnabled;
