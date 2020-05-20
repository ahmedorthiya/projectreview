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
import axios from "axios";

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

  const [userInfos,setList] = useState([]);
  const [selectedUser,setSelectedUser] = useState('');


  useEffect(()=>{
    const allUsers = async ()=>{
      const res = await axios.get("/api/total-users");
      const list = [];

      console.log("res data is = ",res.data);
      res.data.map(row=>{
        list.push({
          name:row.first_name,
          email:row.email,
          'edit':<EditIcon onClick={()=>handleOpen(row)} style={{cursor:'pointer'}}/>



        })
      })
      setList(list);


    }

    allUsers();



  },[])



  const handleOpen = (userInfo) => {
    setSelectedUser(userInfo);
    setOpen(true);


  };

  const handleClose = () => {
    setSelectedUser('');
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
      userInfo={selectedUser}
    />

    <div >
      <UsersToolbar />
      <br/>
      <CustomTable color={'white'} headings={['Name','Email','Edit']} data={userInfos}/>
    </div>
    </div>
  );
};

export default WebUsers;
