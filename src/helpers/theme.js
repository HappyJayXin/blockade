import { createMuiTheme } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';

export const colors = {
  primary: indigo[600]
}

const theme = createMuiTheme({
  palette: {
    primary: indigo,
  },
});

export default theme;
