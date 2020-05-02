import React, { useState, useEffect } from 'react';

import useStyles from './styled';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Grid from '@material-ui/core/Grid';

const App = () => {
  const { container } = useStyles();

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

  return (
    <div className={container}>
      <Grid className={container} container direction="row" justify="center" alignItems="center">
        <Grid item>
          <ButtonGroup color="primary">
            <Button variant="contained" onClick={blockadeHandle}>
              封鎖此網站
            </Button>
            <Button>設定</Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
