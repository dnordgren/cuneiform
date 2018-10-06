import { setColor } from '../util/chromeStorage';

chrome.runtime.onInstalled.addListener(() => {
  setColor('#3aa757');
});

chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
  chrome.declarativeContent.onPageChanged.addRules([
    {
      actions: [
        new chrome.declarativeContent.ShowPageAction(),
      ],
      conditions: [
        new chrome.declarativeContent.PageStateMatcher({
          pageUrl: { hostEquals: 'developer.chrome.com' },
        }),
      ],
    },
  ]);
});
