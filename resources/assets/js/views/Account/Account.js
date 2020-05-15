import React from 'react';
import { makeStyles, useTheme } from '@material-ui/styles';
import { Grid, Tab, Tabs, Box, Typography } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';
import { AccountProfile, AccountDetails, AccountSettings, Feedback } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  },
  tabColor: {
    backgroundColor: theme.palette.background.paper
  }
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      aria-labelledby={`full-width-tab-${index}`}
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      role="tabpanel"
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography component={'div'}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const Account = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const theme = useTheme();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };


  return (
    <div className={classes.root}>

      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="secondary"
        textColor="secondary"
        variant="fullWidth"
        aria-label="full width tabs example"
        className={classes.tabColor}
      >
        <Tab label="PROFILE" {...a11yProps(0)} />
        <Tab label="FEEDBACK FORM" {...a11yProps(1)} />
      </Tabs>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction} >
          <Grid
            container
            spacing={4}        
          >
            <Grid          
              item
              lg={4}
              md={6}
              xl={4}
              xs={12}
            >
              <AccountProfile />
          
            </Grid>
            <Grid
              item
              lg={8}
              md={6}
              xl={8}
              xs={12}
            >
              <AccountDetails />
            </Grid>

            <Grid
              item
              lg={4}
              md={6}
              xl={4}
              xs={12}
            >
            </Grid>

            <Grid
              item
              lg={8}
              md={6}
              xl={8}
              xs={12}
            >
              <AccountSettings/>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Grid
            item
            xs={12}
          >
            <Feedback />
          </Grid>
        </TabPanel>
      </SwipeableViews>

      {/* <Grid
        container
        spacing={4}
      >
        <Grid
          item
          lg={4}
          md={6}
          xl={4}
          xs={12}
        >
          <AccountProfile />
          
        </Grid>
        <Grid
          item
          lg={8}
          md={6}
          xl={8}
          xs={12}
        >
          <AccountDetails />
        </Grid>

        <Grid
          item
          lg={4}
          md={6}
          xl={4}
          xs={12}
        >
         </Grid>

         <Grid
          item
          lg={8}
          md={6}
          xl={8}
          xs={12}
        >
          <AccountSettings/>
        </Grid>
        
      </Grid> */}
    </div>
  );
};

export default Account;
