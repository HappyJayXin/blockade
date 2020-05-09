import React from 'react';
import ReactDOM from 'react-dom';
import Popup from './page/popup';
import './popup.css';

import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './helpers/theme';

(function () {
  ReactDOM.render(
    <MuiThemeProvider theme={theme}>
      <Popup />
    </MuiThemeProvider>,
    document.getElementById('root')
  );
})();
