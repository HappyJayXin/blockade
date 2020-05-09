import React from 'react';
import ReactDOM from 'react-dom';
import Setting from './page/setting';

import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './helpers/theme';

(function () {
  ReactDOM.render(
    <MuiThemeProvider theme={theme}>
      <Setting />
    </MuiThemeProvider>,
    document.getElementById('root')
  );
})();
