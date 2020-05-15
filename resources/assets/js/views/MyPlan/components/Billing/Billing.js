import React from 'react';
import { Typography, Card, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 900,
    margin: 20,
    padding: theme.spacing(5)
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10
  },
  text: {
    paddingRight: 20
  }
}));

const Billing = () => {

  const classes = useStyles();

  return(
    <Card className={classes.root}>
      <Grid item xs={12} direction="column" container justify="center" alignItems="center" >
        <Typography align="center" variant="subtitle1" gutterBottom>No Invoice</Typography>
                
      </Grid>
    </Card>
  )
}

export default Billing;