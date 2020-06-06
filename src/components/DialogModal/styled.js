import { makeStyles } from '@material-ui/core/styles';
import { colors } from '../../helpers/theme';

export default makeStyles(() => ({
  url: {
    color: colors.primary,
    fontWeight: 'bold',
    padding: '0 1px',
  },
  title: {
    wordWrap: 'break-word',
  },
}));
