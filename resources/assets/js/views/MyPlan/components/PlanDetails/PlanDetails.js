import React from 'react';
import { Box, Button, Typography, Card, CardHeader, CardContent, Divider, LinearProgress } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.white,
    maxWidth: 900,
    margin: 20
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
    paddingRight: 20,
    fontWeight: 'bold',    
  }
}));

export default function PlanDetails({handleOpen}){

  const classes = useStyles();

  return(
    <Card className={classes.root}>
      <CardHeader
        title="Plan Details"
      />
      <Divider />
      <CardContent>
        <Box className={classes.row}>
          <Typography >Plan</Typography>
          <Box className={classes.row}>
            <Typography className={classes.text}>Free Plan</Typography>
            <Button variant="contained" color="secondary" onClick={handleOpen}>Upgrade</Button>
          </Box>
        </Box>
        <Divider  />
        <Box className={classes.row}>
          <Typography >Plan Limit (resets on May 18, 2020)</Typography>
          <Typography >0/1,000 Monthly Unique Visitors</Typography>
        </Box>
        <Box>
          <LinearProgress variant="determinate" color="secondary" value={50} style={{height: 20}}/>
        </Box>
        <Divider  />
        <Box className={classes.row}>
          <Typography >Next Limit Reset</Typography>
          <Typography >May 18, 2020</Typography>
        </Box>
      </CardContent>
    </Card>
  )
}