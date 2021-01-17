export enum ActionKeys {
  ToggleOverlayEnabled = 'ToggleOverlayEnabled',
  SetOverlayTitle = 'SetOverlayTitle',
  SetOverlayBody = 'SetOverlayBody',
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

export interface SetOverlayTitle extends Action<{
  title: string,
}> {
  type: ActionKeys.SetOverlayTitle;
}

export interface SetOverlayBody extends Action<{
  body: string,
}> {
  type: ActionKeys.SetOverlayBody;
}

export type ActionTypes =
  | ToggleOverlayEnabled
  | SetOverlayTitle
  | SetOverlayBody;
