import ChromeMessage from './chromeMessage';

const sendMessage = (message: ChromeMessage): void => {
  if (!chrome || !chrome.tabs || !chrome.tabs.query || !chrome.tabs.sendMessage) {
    throw new Error('necessary chrome APIs not available to send message');
  }

  chrome.tabs.query({
    active: true, currentWindow: true
  }, (tabs: Array<chrome.tabs.Tab>) => {
    const activeTabId = tabs[0].id;
    if (!activeTabId) {
      throw new Error('active tab not found to send message from');
    }

    // TODO debug logs for message sending
    chrome.tabs.sendMessage(activeTabId, message);
  });
};

export default sendMessage;
