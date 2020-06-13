import React from 'react';
import PopupComp from '../components/Popup';

const Popup = () => {
  const setToStorage = (url) => {
    chrome.storage.local.get(['urlList'], (item) => {
      if (url && item.urlList && item.urlList.length >= 0) {
        chrome.storage.local.set({
          urlList: [...new Set([...item.urlList, url])],
        });
      } else {
        chrome.storage.local.set({
          urlList: [url],
        });
      }
    });
  };

  const blockadeHandle = () => {
    chrome.tabs.getSelected(null, (tab) => {
      if (tab.url && tab.url.length > 0) {
        setToStorage(tab.url);
      }
    });
  };

  const settingHandle = () => {
    chrome.tabs.create({
      url: 'setting.html',
    });
  };

  return (
    <PopupComp
      blockadeHandle={blockadeHandle}
      settingHandle={settingHandle}
    />
  );
};

export default Popup;
