import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  PlanDetails,
  MoreImpressions,
  Billing,
  PlanUpgrade
} from './components';
import Typography from '@material-ui/core/Typography';
import { Grid, Hidden } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundImage: 'url(/images/bg-pattern.jpg)',
  }
}));

const MyPlan = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };

  return(
    <Grid container className={classes.root}>
      <Grid item md={3} implementation="css" smDown component={Hidden} />
      <Grid
        item
        md={6}
        xs={12}
      >
        <PlanUpgrade
          open={open}
          handleClose={handleClose}
          handleOpen={handleOpen}
        />
        <Typography gutterBottom
          style={{margin: 20}}
          variant="h3"
        >
            Current Plan
        </Typography>
        <PlanDetails 
          handleOpen={handleOpen}
        />
        <MoreImpressions
          handleOpen={handleOpen}
        />
        <Typography 
          gutterBottom 
          style={{margin: 20}} 
          variant="h3"
        >
            Your Invoices
        </Typography>
        <Billing />
      </Grid>
    </Grid>
  )
}

export default MyPlan;