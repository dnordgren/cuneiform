type GetColorCallback = (color: string) => void;

const getColor = (callback: GetColorCallback): void => {
  chrome.storage.sync.get('color', (items: {
    [key: string]: any
  }) => {
    callback(items.color);
  });
};

const setColor = (color: string): void => {
  chrome.storage.sync.set({ color }, () => {
    console.debug(`color set to ${color}`);
  });
};

export {
  getColor,
  setColor,
};
