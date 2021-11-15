import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Box,
} from '@material-ui/core';
import {
  makeStyles,
} from '@material-ui/core/styles';

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
}));

/**
 * A modal informing user about some conditions before proceeding
 *
 * @component
 * @example
 *
 * return (
 *   <InfoDialog
 *      open={openLogoutModal}
 *      handleCancel={() => setLogoutModalOpen(false)}
 *      handleConfirm={handleLogout}
 *      cancelTitle="Cancel"
 *      confirmTitle="Log Out"
 *      title="Are you sure you want to log out?"
 *      message="By clicking this icon you have decided to you want to log out."
 *   />
 * );
 */
export default function InfoDialog(props) {
  const {
    open,
    handleCancel,
    handleConfirm,
    cancelTitle,
    confirmTitle,
    title,
    message,
  } = props;
  const classes = useStyles();

  return (
    <Dialog
      id="info-dialog"
      maxWidth="md"
      open={open}
      onClose={handleCancel}
      aria-labelledby="info-dialog-title"
      aria-describedby="info-dialog-description"
    >
      <DialogTitle className={classes.title} id="info-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText className={classes.dialogContent} id="info-dialog-description">
          {message}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Box display="flex" justifyContent="space-between" style={{ width: '100%' }}>
          <Button onClick={handleCancel} className="cancelBtn" id="cancel-action">
            {cancelTitle}
          </Button>
          <Button onClick={handleConfirm} className="confirmBtn" id="confirm-action">
            {confirmTitle}
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
}

InfoDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  handleCancel: PropTypes.func.isRequired,
  handleConfirm: PropTypes.func.isRequired,
  cancelTitle: PropTypes.string.isRequired,
  confirmTitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};
