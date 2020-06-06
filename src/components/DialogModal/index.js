import React from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';

const DialogModal = ({ open, close, deleteUrl }) => {
  return (
    <Dialog onClose={close} open={open}>
      <DialogTitle>要刪除嗎?</DialogTitle>
      <DialogActions>
        <Button variant="contained" color="primary" onClick={close}>沒事</Button>
        <Button variant="contained" color="secondary" onClick={deleteUrl}>刪除</Button>
      </DialogActions>
    </Dialog>
  )
}

export default DialogModal;
