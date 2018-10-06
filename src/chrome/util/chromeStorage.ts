const getColor = (callback: Function): void => {
  chrome.storage.sync.get('color', (items: {
    [key: string]: any
  }) => {
    callback(items['color']);
  });
};

const setColor = (color: string): void => {
  chrome.storage.sync.set({ color }, () => {
    console.log(`color set to ${color}`);
  });
};

export {
  getColor,
  setColor,
};
