/* eslint-disable react/no-multi-comp */
import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Widget from './Widget';

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
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper
  },
}));

const InstallWidget = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const platfrom = {
    platform_1: '/images/platforms/html.svg',
    platform_2: '/images/platforms/gtm.svg',
    platform_3: '/images/platforms/wordpress.svg',
    platform_4: '/images/platforms/other.svg',
  }

  return (
    <div className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="secondary"
        textColor="secondary"
        centered
      >
        <Tab label="HTML" {...a11yProps(0)} icon={<img src={platfrom.platform_1} style={{height:'60px'}} />}/>
        <Tab label="GTM" {...a11yProps(1)} icon={<img src={platfrom.platform_2} style={{height:'60px'}} />}/> />}/>
        <Tab label="Wordpress" {...a11yProps(2)} icon={<img src={platfrom.platform_3} style={{height:'60px'}} />}/> />}/>
        <Tab label="Other Platforms" {...a11yProps(3)} icon={<img src={platfrom.platform_4} style={{height:'60px'}} />}/> />}/>
      </Tabs>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Widget
            text="Copy and paste this JAvascript code snippet into the <body> of the page that you want to display the widget on."
            code="<!-- start of Async Code --> !function0,i
                window.rao&&window.console.&&console.error&&console.errorProveSource[],display:functioon()"
          />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Widget
            text="The most recommended way to install the widget is using Google Tag Manager. Please follow the instructions in this guide:"
            code="https://tagmanager.google.com/"
          />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <Widget
            text="Copy and paste this JS code snippet in the </head> of the page that you want to track or display notifications on."
            code="<!-- start of Async Code --> !function0,i
                window.rao&&window.console.&&console.error&&console.errorProveSource[],display:functioon()"
          />
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <Widget
            text="Copy and paste this JS code snippet in the </head> of the page that you want to track or display notifications on."
            code="<!-- start of Async Code --> !function0,i
                window.rao&&window.console.&&console.error&&console.errorProveSource[],display:functioon()"
          />
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}

export default InstallWidget;