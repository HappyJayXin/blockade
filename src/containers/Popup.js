import React, { useState, useEffect } from 'react';
import PopupComp from '../components/Popup';

const Popup = () => {
  const [currentUrl, setCurrentUrl] = useState('');
  const blockadeHandle = () => {
    chrome.tabs.getSelected(null, (tab) => {
      setCurrentUrl(tab.url);
    });
  };

  useEffect(() => {
    chrome.storage.local.get(['urlList'], (item) => {
      if (item.urlList && item.urlList.length >= 0) {
        chrome.storage.local.set({
          urlList: [...new Set([...item.urlList, currentUrl])],
        });
      } else {
        chrome.storage.local.set({
          urlList: [currentUrl],
        });
      }
    });
  }, [currentUrl]);

  const settingHandle = () => {
    chrome.tabs.create({
      'url': 'setting.html'
    })
  };

  return (
    <PopupComp blockadeHandle={blockadeHandle} settingHandle={settingHandle} />
  )
};

export default Popup;
