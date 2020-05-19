import React from 'react';
import { Typography, Card, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CustomTable from "../../../../components/table";


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

        <Typography variant={"h3"}>Invoices</Typography>
        <br/>

        <CustomTable headings={['successful','Date']}
               data={[{
                 successful:'no',
                 Date:'Today'
               },{
                 successful:'yes',
                 Date:'yesterday'

               }]}
        />


      </Grid>
    </Card>
  )
}

export default Billing;
