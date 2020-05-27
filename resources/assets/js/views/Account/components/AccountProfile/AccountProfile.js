import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import FormData from 'form-data'

import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardActions,
  CardContent,
  Avatar,
  Typography,
  Divider,
  Button//,
  //LinearProgress
} from '@material-ui/core';
import {useSelector} from "react-redux";
import axios from "axios";


const useStyles = makeStyles(theme => ({
  root: {},
  details: {
    display: 'flex'
  },
  avatar: {
    marginLeft: 'auto',
    height: 110,
    width: 100,
    flexShrink: 0,
    flexGrow: 0
  },
  progress: {
    marginTop: theme.spacing(2)
  },
  uploadButton: {
    marginRight: theme.spacing(2)
  }
}));

const AccountProfile = props => {
  const { className, ...rest } = props;
  const currentUser = props.currentuser;
  const [avatar,setAvatar] = React.useState("");



  const classes = useStyles();

  const updateProfile = async (e)=>{
    e.preventDefault();
    if(avatar[0] !== "") {
      const formData = new FormData();
      Array.from(avatar).forEach(image => {
        console.log("image is = ",image);
        formData.append('files', image);
      });
     // console.log("form data is = ",formData)

     const data = await axios.post("/api/avatars",formData);

      console.log("data is = ",data);

    }
  }






  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent>
        <div className={classes.details}>
          <div>
            <Typography
              component={'h2'}
              gutterBottom
              variant="h2"
            >
              {
                currentUser.first_name + "  "+ currentUser.last_name
              }
            </Typography>
            <Typography
              className={classes.locationText}
              color="textSecondary"
              variant="body1"
            >
              {/*{user.city}, {user.country}*/}
            </Typography>
            <Typography
              className={classes.dateText}
              color="textSecondary"
              component={'span'}
              variant="body1"
            >
              {/*{moment().format('hh:mm A')} ({user.timezone})*/}
            </Typography>
          </div>
          <Avatar
            className={classes.avatar}
            src={currentUser.avatar}
          />
        </div>
        {/* <div className={classes.progress}>
          <Typography variant="body1">Profile Completeness: 70%</Typography>
          <LinearProgress
            value={70}
            variant="determinate"
          />
        </div> */}
      </CardContent>
      <Divider />
      <CardActions>
        <form  method="POST" onSubmit={updateProfile} encType="multipart/form-data">
       <input type={"file"} onChange={e=>setAvatar(e.target.files)} accept="image/x-png,image/gif,image/jpeg"/>
        <Button
          className={classes.uploadButton}
          color="primary"
          variant="text"
          type={"submit"}


        >
          Upload picture
        </Button>
        </form>


      </CardActions>
    </Card>
  );
};

AccountProfile.propTypes = {
  className: PropTypes.string
};

export default AccountProfile;
