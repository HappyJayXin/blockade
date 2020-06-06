import React from 'react';
import PropTypes from 'prop-types';

import useStyles from './styled';
import Paper from '@material-ui/core/Paper';

const Content = ({ list, onClick }) => {
  const { container, paper } = useStyles();

  return (
    <div className={container}>
      {list.map(
        (item, inx) =>
          item && (
            <Paper className={paper} key={inx} elevation={3} variant="outlined" onClick={() => onClick(inx)}>
              {item}
            </Paper>
          )
      )}
    </div>
  );
};

Content.defaultProps = {
  list: [],
  onClick: () => {}
};

Content.prototype = {
  list: PropTypes.array,
  onClick: PropTypes.func,
};

export default Content;
