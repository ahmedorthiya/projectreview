import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar, Badge, Hidden, IconButton, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";


const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none'
  },
  flexGrow: {
    flexGrow: 1
  },
  signOutButton: {
    marginLeft: theme.spacing(1)

  }
}));

const Topbar = props => {
  const { className, onSidebarOpen, ...rest } = props;

  const classes = useStyles();

  const [notifications] = useState([]);


  const userInfo = useSelector(state=>state.entities.users[state.session.currentUser]);



  return (
    <AppBar
      {...rest}
      className={clsx(classes.root, className)}
      color="inherit"
    >
      <Toolbar>
        <RouterLink to="/">
          <img
            alt="Logo"
            src="/images/logos/logo-new-small.png"
            style={{width: 120, marginLeft: 30}}
          />
        </RouterLink>
        <div className={classes.flexGrow} />
        <Hidden mdDown>

          {
            userInfo.account_type === 'user' ? (
              <Button
                color="primary"
                component={RouterLink}
                href="/myplan"
                to={"/myplan"}
                size="small"
                variant="outlined"
              >
                FREE Plan - Upgrade Now
              </Button>
            ):""
          }



          <IconButton
            color="inherit"
            style={{ display: 'none' }}
          >
            <Badge
              badgeContent={notifications.length}
              color="primary"
              variant="dot"
            >
              <NotificationsIcon />
            </Badge>
          </IconButton>

          <IconButton
            className={classes.signOutButton}
            color="inherit"
            title="Log out"
            component={Link}
            to={"/logout"}
          >
            <InputIcon />
          </IconButton>

        </Hidden>
        <Hidden lgUp>
          <IconButton
            color="inherit"
            onClick={onSidebarOpen}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func
};

export default Topbar;
