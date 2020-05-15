import React from 'react';
import { Box, Button, Typography, Card, Grid } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.white,
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

const MoreImpressions = ({handleOpen}) => {

  const classes = useStyles();

  return(
    <Card className={classes.root}>
      <Grid item xs={12} direction="column" container justify="center" alignItems="center" >
        <Typography align="center" variant="h3" gutterBottom>More Impressions = More Conversion</Typography>
        <Typography align="center" variant="subtitle2" gutterBottom>Want to increase your visitors conversion? increase your monthly limit here</Typography>
        <Button color="secondary" variant="contained" onClick={handleOpen}>Upgrade</Button>
      </Grid>
    </Card>
  )
}

export default MoreImpressions;