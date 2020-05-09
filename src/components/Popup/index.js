import React from 'react';
import PropTypes from 'prop-types';

import useStyles from './styled';
import { Typography, Grid, ButtonGroup, Button } from '@material-ui/core';

const Popup = ({ blockadeHandle, settingHandle }) => {
  const { container } = useStyles();

  return (
    <div className={container}>
      <Grid className={container} container direction="row" justify="center" alignItems="center">
        <Grid item>
          <Typography variant="h4" align="center" color="primary" gutterBottom>
            Blockade
          </Typography>

          <ButtonGroup color="primary">
            <Button variant="contained" onClick={blockadeHandle}>
              封鎖此網站
            </Button>

            <Button onClick={settingHandle}>設定</Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    </div>
  );
};

Popup.prototype = {
  blockadeHandle: PropTypes.func.isRequired,
  settingHandle: PropTypes.func.isRequired,
};

export default Popup;
