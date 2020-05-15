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

export default function TransitionsModal({open, handleClose, handleOpen}) {
  const classes = useStyles();
 

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
          <Grid container justify="center" alignItems="center">
            <Grid item xs={12} >
              <Typography variant="h4" align="center">
                        Reply to Reviews
              </Typography>
            </Grid>

            <Grid item sm={4}>
              <Rating name="read-only" value={5} readOnly />
            </Grid>
            <Grid item sm={4} align="center">
              <Typography variant="body2">
                        Submitted by 12 November
              </Typography>
            </Grid>
            <Grid item sm={4} align="center">
              <Typography variant="body2">
                        Review Source
              </Typography>
            </Grid>

            <Grid item xs={12} align="left">
              <Typography variant="subtitle2" gutterBottom>
                        Review Source
              </Typography>
              <Divider variant="fullWidth" component="hr" className={classes.line} />
              <Typography variant="subtitle2" gutterBottom>
                        To: Google
              </Typography>
              <Typography variant="subtitle2" gutterBottom>
                        Your Reply
              </Typography>

              <TextField
                fullWidth
                id="outlined-multiline-static"
                margin="normal"
                multiline
                placeholder="Enter your reply here"
                rows={4}
                variant="outlined"
              />

              <Grid align="center">
                    
                <Typography variant="caption" align='center' display='block' gutterBottom>
                        This review is still in your inbox so the reply will only be emailed to the review,<br/>
                        For you reply to appear in your Review Tab, the review must first be published. <u>Publish now</u>
                </Typography>

                <Button color="secondary" variant="contained">
                        Reply
                </Button>
              </Grid>

            </Grid>
          </Grid>
        </div>
      </Fade>
    </Modal>
  );
}