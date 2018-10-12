// Modeled after Redux FSA
// https://github.com/redux-utilities/flux-standard-action

import chromeMessageTypes from './chromeMessageTypes';

interface ChromeMessage {
  type: chromeMessageTypes;
  payload?: {
    [key: string]: any,
  };
  meta?: object;
  error?: boolean;
}

export default ChromeMessage;
