chrome.runtime.onMessage.addListener(
  (message: any): void => {
    if (message.msg === 'yo') {
      alert('hello from content_script');
    }
  }
);
