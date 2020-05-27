import React, { useState, useMemo } from 'react';
import {WidgetContext} from './WidgetContext';
import { makeStyles, useTheme } from '@material-ui/styles';
import { Grid, Tab, Tabs, Box, Typography,IconButton, Paper } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import { ProductsToolbar, ProductCard, InstallWidget, WidgetSettings } from './components';
import mockData from './data';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  },
  pagination: {
    marginTop: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  tabColor: {
    backgroundColor: theme.palette.background.paper
  },
  spacer: {
    flexGrow: 1
  },
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

const ProductList = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const theme = useTheme();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [state, setState] = useState({
    color: 'yellow',
    position: 'left'
  })
  const providerValue = useMemo(() =>({state,setState}),[state, setState]);
  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const [products] = useState(mockData);

  return (
    <div className={classes.root}>
      <Paper className={classes.spacer}>
      
        <Tabs
          aria-label="full width tabs example"
          className={classes.tabColor}
          indicatorColor="secondary"
          onChange={handleChange}
          textColor="secondary"
          value={value}
          variant="fullWidth"
        >
          
             <Tab
            label="INTEGRATIONS"
            {...a11yProps(0)}
          />
          <Tab
            label="WIDGET SETTINGS"
            {...a11yProps(1)}
          />
          <Tab
            label="INSTALL WIDGET"
            {...a11yProps(2)}
          />
        </Tabs> 
      </Paper>
      <WidgetContext.Provider value={providerValue}>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel
          dir={theme.direction}
          index={0}
          value={value}
        >
          <ProductsToolbar />
          <div className={classes.content}>
            <Grid
              container
              spacing={3}
            >
              {products.map(product => (
                <Grid
                  item
                  key={product.id}
                  lg={4}
                  md={6}
                  xs={12}
                >
                  <ProductCard product={product} />
                </Grid>
              ))}
            </Grid>
          </div>
          <div className={classes.pagination}>
            <Typography variant="caption">1-6 of 20</Typography>
            <IconButton>
              <ChevronLeftIcon />
            </IconButton>
            <IconButton>
              <ChevronRightIcon />
            </IconButton>
          </div>
        </TabPanel>
        <TabPanel
          dir={theme.direction}
          index={1}
          value={value}
        >
          <WidgetSettings />
        </TabPanel>
        <TabPanel
          dir={theme.direction}
          index={2}
          value={value}
        >
          <InstallWidget />
        </TabPanel>
      </SwipeableViews>
    </WidgetContext.Provider>
      
      {/* <InstallWidget />
      <ProductsToolbar />
      
      <div className={classes.content}>
        <Grid
          container
          spacing={3}
        >
          {products.map(product => (
            <Grid
              item
              key={product.id}
              lg={4}
              md={6}
              xs={12}
            >
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </div>
      <div className={classes.pagination}>
        <Typography variant="caption">1-6 of 20</Typography>
        <IconButton>
          <ChevronLeftIcon />
        </IconButton>
        <IconButton>
          <ChevronRightIcon />
        </IconButton>
      </div> */}
    </div>
  );
};

export default ProductList;
