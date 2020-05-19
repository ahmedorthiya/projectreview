import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Divider, Drawer } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import ImageIcon from '@material-ui/icons/Image';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import SettingsIcon from '@material-ui/icons/Settings';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import AssistantIcon from '@material-ui/icons/Assistant';
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';
import ReceiptIcon from '@material-ui/icons/Receipt';
import AccountBalanceWalletIcon from '@material-ui/icons/Face';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {Redirect} from "react-router-dom";
import { Profile, SidebarNav, UpgradePlan } from './components';
import PeopleIcon from '@material-ui/icons/People';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import {useSelector} from "react-redux";
import {withRouter} from "react-router-dom";
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import ListIcon from '@material-ui/icons/List';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

const useStyles = makeStyles(theme => ({
  drawer: {
    width: 240,
    [theme.breakpoints.up('lg')]: {
      marginTop: 64,
      height: 'calc(100% - 64px)'
    }
  },
  root: {
    backgroundColor: theme.palette.white,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: theme.spacing(2)
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  nav: {
    marginBottom: theme.spacing(2)
  }
}));

const Sidebar = props => {
  const { open, variant, onClose, className, ...rest } = props;
  const userInfo = useSelector(state=>state.entities.users[state.session.currentUser]);

  const showAdminPages = props.location.pathname.includes("admin-panel");



  const classes = useStyles();

  const adminPages = [
    {
      title: 'Admin',
      href: '/admin-panel',
      icon: <SupervisorAccountIcon />
    },
    {
      title: 'Users',
      href: '/admin-panel/users',
      icon: <ListIcon />
    },
    {
      title: 'Coupons',
      href: '/admin-panel/coupons',
      icon: <CreditCardIcon />
    },
    {
      title: 'Subscribed Users',
      href: '/admin-panel/subscribed-users',
      icon: <AttachMoneyIcon />
    },
    {
      title: 'Go To Dashboard',
      href: '/dashboard',
      icon: <DashboardIcon />
    },
    {
      title: 'Logout',
      href: '/logout',

      icon: <ExitToAppIcon />
    }
  ];

  const pages = [
    {
      title: 'Dashboard',
      href: '/dashboard',
      icon: <DashboardIcon />
    },
    {
      title: 'My Reviews',
      href: '/users',
      icon: <AssistantIcon />
    },
    {
      title: 'Install Widgets',
      href: '/products',
      icon: <SystemUpdateAltIcon />
    },
    {
      title: 'My Plan',
      href: '/myplan',
      icon: <AccountBalanceWalletIcon />
    },
    {
      title: 'Settings',
      href: '/account',
      icon: <SettingsIcon />
    },
    {
      title: 'Logout',
      href: '/logout',

      icon: <ExitToAppIcon />
    }
  ];

  if(userInfo.account_type === 'admin') {
    pages.push( {
        title: 'Go To Admin Panel',
        href: '/admin-panel',
        icon: <SupervisorAccountIcon />
    })
  }

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant={variant}
    >
      <div
        {...rest}
        className={clsx(classes.root, className)}
      >
        <Profile />
        <Divider className={classes.divider} />

        <SidebarNav
          className={classes.nav}
          pages={showAdminPages ? adminPages : pages}
        />

        <br/>
        {
          !showAdminPages &&  <UpgradePlan />
        }



      </div>
    </Drawer>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired
};

export default withRouter(Sidebar);
