import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {Grid, Typography, Divider, TextField, Button} from '@material-ui/core';
import axios from "axios";

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

export default function TransitionsModal({open, handleClose,userInfo}) {
  const classes = useStyles();

  const makeAdmin = async ()=>{
   const res = await axios.patch(`/api/make-admin/${userInfo.id}`);

   handleClose();

  }



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
          <Grid container justify="center" direction={"column"} alignItems="center">
            <Grid item xs={12} >
              <Typography variant="h2" align="center">
                       User Data
              </Typography>
            </Grid>





            <Grid item xs={12} align="center">
              <Typography   gutterBottom>
                       Profile Info
              </Typography>

              <Divider variant="fullWidth" component="hr" className={classes.line} />
              <Typography fullWidth   gutterBottom>
                {userInfo.first_name + userInfo.last_name}
              </Typography>


              <Typography fullWidth   gutterBottom>
                {userInfo.email}
              </Typography>
              <br/>













              <Grid align="center">




                {
                  userInfo.account_type === 'user' ? (
                    <Button onClick={makeAdmin} variant={"contained"} color="primary" style={{marginLeft:"5px"}}>
                      Make admin
                    </Button>
                  ): ""
                }



              </Grid>

            </Grid>
          </Grid>
        </div>
      </Fade>
    </Modal>
  );
}
