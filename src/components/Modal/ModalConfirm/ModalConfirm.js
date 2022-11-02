import React from "react";

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  Slide,
} from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ModalConfirm = ({ open, handleClose, text }) => {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>Do you want {text}?</DialogTitle>      
      <DialogActions>
        <Button onClick={handleClose}>Disagree</Button>
        <Button onClick={() => handleClose(true)}>Agree</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalConfirm;
