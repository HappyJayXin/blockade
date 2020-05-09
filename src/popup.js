import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './popup.css';

import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './helpers/theme';

(function () {
  ReactDOM.render(
    <MuiThemeProvider theme={theme}>
      <App></App>
    </MuiThemeProvider>,
    document.getElementById('root')
  );
})();
