import React, { useState, useEffect, useContext } from 'react';
import {
  makeStyles,
} from '@material-ui/core/styles';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';
import { Context } from '../../store/Store';

const useStyles = makeStyles((theme) => ({
  title: {
    '& > h2': {
      fontSize: 42,
      color: theme.palette.primary.main,
    },
  },
  dialogContent: {
    fontSize: 34,
  },
  btn: {
    fontSize: 34,
  },
}));

/**
 * Invasive alert dialog to show error messages to the user.
 * Relies on global React Context state to display:
 *
 * @component
 * @example
 *
 * return (
 *   <ErrorDialog />
 * );
 */
export default function ErrorDialog() {
  const [open, setOpen] = useState(false);
  const [state, dispatch] = useContext(Context);
  const classes = useStyles();

  const { error } = state;

  /**
     * show dialog if  message is present
     * @param {object} error contains message
     */
  useEffect(() => {
    if (error) {
      setOpen(true);
    }
  }, [error]);
  /**
   * close dialog and set error to null
   */
  function handleClose() {
    dispatch({ type: 'CLEAR_ERROR' });
    setOpen(false);
  }

  return (
    <Dialog
      fullWidth
      maxWidth="md"
      id="alert-dialog"
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle className={classes.title} id="alert-dialog-title">{error ? error.title : ''}</DialogTitle>
      <DialogContent>
        <DialogContentText className={classes.dialogContent} id="alert-dialog-description">
          {error ? error.message : ''}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} className={classes.btn} color="primary" id="close-alert">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
