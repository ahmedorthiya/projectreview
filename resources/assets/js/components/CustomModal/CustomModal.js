import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {Grid, Typography, Divider, TextField, Button} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: '90%',
    maxWidth: 900
  },
  line: {
    margin: theme.spacing(2, 0, 2)
  }
}));

export default function CustomModal(props) {

  const classes = useStyles();

  const {handleClose,open} = props;




  return (
    <Modal
      aria-describedby="transition-modal-description"
      aria-labelledby="transition-modal-title"
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
      className={classes.modal}
      closeAfterTransition
      onClose={handleClose}
      open={open}
    >
      <Fade in={open}>
        <div className={classes.paper}>
          {
            props.children
          }
        </div>
      </Fade>
    </Modal>
  );
}

