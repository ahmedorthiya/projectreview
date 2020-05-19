import React, {useCallback, useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/styles';

import { UsersToolbar, UsersTable } from '../UserList/components';
import EditIcon from '@material-ui/icons/Edit';
import {useDispatch, useSelector} from "react-redux";

import CustomTable from "../../components/table";
import Modal from "./Modal";
import {Card} from "@material-ui/core";
import clsx from "clsx";
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const WebUsers = props => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  // const [users] = useState(mockData);
  const myreviews = useSelector(state=>state.reviews.myReviews);
  const dispatch = useDispatch();
  const {className,...rest} = props;




  const handleOpen = () => {
    setOpen(true);

  };

  const handleClose = () => {
    setOpen(false);

  };



  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
    <Modal
      open={open}
      handleOpen={handleOpen}
      handleClose={handleClose}
      reviewerId={1}
    />

    <div >
      <UsersToolbar />
      <br/>
      <CustomTable color={'white'} headings={['Name','Email','Edit','Delete']} data={[
        {'name':'M Ahmed Mushtaq','email':'test@gmail.com',
          'edit':<EditIcon onClick={handleOpen} style={{cursor:'pointer'}}/>
          ,'delete':<DeleteIcon onClick={handleOpen} style={{cursor:'pointer'}}
          />
          },

      ]}/>
    </div>
    </div>
  );
};

export default WebUsers;
