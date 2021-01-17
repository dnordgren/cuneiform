export interface OverlayState {
  enabled: boolean;
  title: string;
  body: string;
}

export interface AppState {
  overlay: OverlayState;
}
