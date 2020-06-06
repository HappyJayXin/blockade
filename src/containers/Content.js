import React, { useState } from 'react';

import useInterval from '../hooks/useInterval';
import arrayMatch from '../helpers/arrayMatch';

import ContentComp from '../components/Content';
import DialogModal from '../components/DialogModal';

const Content = () => {
  const [blockadeList, setBlockadeList] = useState([]);

  useInterval(() => {
    chrome.storage.local.get(['urlList'], (item) => {
      if (item.urlList && item.urlList.length >= 0 && !arrayMatch(blockadeList, item.urlList)) {
        setBlockadeList(item.urlList);
      }
    });
  }, 1000);

  const [selectIndex, setSelectIndex] = useState(undefined);

  const [open, setOpen] = useState(false);

  const handleOpen = (inx) => {
    setOpen(true);
    setSelectIndex(inx);
  };

  const handleClose = () => {
    setSelectIndex(undefined);
    setOpen(false);
  };

  const deleteUrl = () => {
    setBlockadeList((list) => list.splice(selectIndex, 1));

    chrome.storage.local.set({
      urlList: [...blockadeList],
    });

    setOpen(false);
  };

  return (
    <>
      <ContentComp list={blockadeList} onClick={handleOpen} />
      <DialogModal
        close={handleClose}
        open={open}
        deleteUrl={deleteUrl}
        name={blockadeList[selectIndex]}
      />
    </>
  );
};

export default Content;
