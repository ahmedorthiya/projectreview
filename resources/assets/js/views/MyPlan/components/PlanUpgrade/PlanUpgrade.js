import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {Grid, Typography, Divider, Avatar, Button} from '@material-ui/core';
import {useSelector} from "react-redux";
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
    padding: theme.spacing(7, 4, 7),
    width: '90%',
    maxWidth: 900,
    border: 0,
    borderRadius: 20
  },
  line: {
    margin: theme.spacing(3, 5, 3)
  },
  icon: {
    width: 150,
    height: 150,
    alignSelf: 'center'
  },
  month: {
    fontSize: 14,
    color: '#bbdefb',
    position: 'absolute',
    marginTop: '0.4em'
  }
}));





const  PlanUpgrade = (props)=> {
  const classes = useStyles();
  const {open, handleClose, handleOpen} = props;
  const currentUser = useSelector(store=>store.session.currentUser);
  const entity = useSelector(store=>store.entities);
  const {email,id}=entity.users[currentUser];


  const openPaddle = (productId)=>{
    handleClose();
    Paddle.Checkout.open({
      product:productId,
      successCallback:(data)=> handleSuccessfulPayment(data),
      closeCallback:(data)=> handleUnsuccessfulPayment(data),
      eventCallback:(evData)=>handleEventCallBack(data),
      email,

    })
  }

  const handleSuccessfulPayment = async (data)=>{
    await axios.post("/api/subscriptions",{
      ...data,
      id,
      completed:data.checkout.completed});



  }
  const handleUnsuccessfulPayment = async (data)=>{
    console.log("check = ",{
      ...data,
      id,
      completed:data.checkout.completed})


    await axios.post("/api/subscriptions",{
      ...data,
      id,
      completed:data.checkout.completed}).catch(err=>console.log(err));
  }
  const handleEventCallBack = (evData)=>{
    console.log("ev Data Online = "+evData);
  }


  return (
    <React.Fragment>
    <Modal
      aria-describedby="transition-modal-description"
      aria-labelledby="transition-modal-title"
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
      closeAfterTransition
      className={classes.modal}

      onClose={handleClose}
      open={open}
    >
      <Fade in={open}>
        <div className={classes.paper}>
          <Grid container justify="center" alignItems="center">
            <Grid item xs={12} sm={4} align="center">
              <Avatar style={{width: 150, height: 150}} alt="Remy Sharp" src="https://s22.postimg.cc/8mv5gn7w1/paper-plane.png" />
              <br/>
              <Typography variant="h5" align="center" color="textSecondary" gutterBottom>
                STARTER
              </Typography>
              <Divider className={classes.line}/>
              <Typography variant="h6" align="center" color="secondary" gutterBottom>
                New Reviews Email Notifications
              </Typography>
              <Divider className={classes.line}/>
              <Typography variant="h6" align="center" color="secondary" gutterBottom>
                  Up to <b>10K</b> Monthly Unique Visitors
              </Typography>
              <Divider className={classes.line}/>
              <Typography variant="h6" align="center" color="secondary" gutterBottom>
                  Manage up to <b>500</b> reviews
              </Typography>

              <Divider className={classes.line}/>
              <Typography variant="h2" align="center" color="primary" gutterBottom>
                $18
                <span className={classes.month}>/mo</span>
              </Typography>
              <br/>

              <Grid align="center" >


                <Button color="secondary"  onClick={()=>openPaddle(593800)}  variant="contained">
                  UPGRADE
                </Button>

              </Grid>

            </Grid>

            <Grid item xs={12} sm={4} align="center">
              <Avatar style={{width: 150, height: 150}} alt="Remy Sharp" src="https://s28.postimg.cc/ju5bnc3x9/plane.png" />
              <br/>
              <Typography variant="h5" align="center" color="textSecondary" gutterBottom>
                GROWTH
              </Typography>
              <Divider className={classes.line}/>
              <Typography variant="h6" align="center" color="secondary" gutterBottom>
                New Reviews Email Notifications
              </Typography>
              <Divider className={classes.line}/>
              <Typography variant="h6" align="center" color="secondary" gutterBottom>
                  Up to <b>50K</b> Monthly Unique Visitors
              </Typography>
              <Divider className={classes.line}/>
              <Typography variant="h6" align="center" color="secondary" gutterBottom>
                  Manage <b>Unlimited</b> reviews
              </Typography>

              <Divider className={classes.line}/>
              <Typography variant="h2" align="center" color="primary" gutterBottom>
                $49
                <span className={classes.month}>/mo</span>
              </Typography>
              <br/>
              <Grid align="center" >
                <Button color="secondary" onClick={()=>openPaddle(593844)}  variant="contained">
                        UPGRADE
                </Button>
              </Grid>
            </Grid>

            <Grid item xs={12} sm={4} align="center">
              <Avatar style={{width: 150, height: 150}} alt="Remy Sharp" src="https://s21.postimg.cc/tpm0cge4n/space-ship.png" />
              <br/>
              <Typography variant="h5" align="center" color="textSecondary" gutterBottom>
                ULTIMATE
              </Typography>
              <Divider className={classes.line}/>
              <Typography variant="h6" align="center" color="secondary" gutterBottom>
                New Reviews Email Notifications
              </Typography>
              <Divider className={classes.line}/>
              <Typography variant="h6" align="center" color="secondary" gutterBottom>
                <b>Unlimited</b> Monthly Unique Visitors
              </Typography>
              <Divider className={classes.line}/>
              <Typography variant="h6" align="center" color="secondary" gutterBottom>
                  Manage <b>Unlimited</b> reviews
              </Typography>

              <Divider className={classes.line}/>
              <Typography variant="h2" align="center" color="primary" gutterBottom>
                $91
                <span className={classes.month}>/mo</span>
              </Typography>
              <br/>
              <Grid align="center" >
                <Button color="secondary" onClick={()=>openPaddle(593845)}   variant="contained">
                    UPGRADE
                </Button>
              </Grid>
            </Grid>

          </Grid>
        </div>
      </Fade>
    </Modal>

    </React.Fragment>

  );
}

export default PlanUpgrade;
