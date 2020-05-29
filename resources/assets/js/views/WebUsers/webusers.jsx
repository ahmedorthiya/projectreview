import React, {useCallback, useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/styles';

import { UsersToolbar } from '../UserList/components';
import EditIcon from '@material-ui/icons/Edit';
import {useDispatch, useSelector} from "react-redux";

import CustomTable from "../../components/table";
import Modal from "./Modal";
import {Button} from "@material-ui/core";
import clsx from "clsx";

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
  const [webResponse,setWebResponse] = useState("");
  const [loadMore,setLoadMore] = useState(true);

  const loadMoreUsers = ()=>{

    if(webResponse.current_page === webResponse.last_page) return setLoadMore(false);
    else if((webResponse.current_page+1) >= webResponse.last_page){
     setLoadMore(false);
    }

    const nextUrl = webResponse.next_page_url.substr(21,webResponse.next_page_url.length-21);

    loadWebUsers(nextUrl);

  }

  const loadWebUsers = useCallback(async (url)=>{
    const res = await axios.get(url);
    const list = [];




    res.data.data.map(row=>{
      list.push({
        name:row.first_name,
        email:row.email,
        'edit':<EditIcon onClick={()=>handleOpen(row)} style={{cursor:'pointer'}}/>



      })
    })
    setWebResponse(res.data);

   // const oldUserinfos = userInfos.concat(list); // merge two array

    setList(data=>(data.concat(list)));



  },[])

  useEffect(()=>{


    loadWebUsers("/api/total-users");



  },[loadWebUsers])



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
      <br/>
      <div>
        <Button variant={"contained"} color={"primary"} onClick={loadMoreUsers} disabled={!loadMore}> Load More</Button>
      </div>

    </div>
  );
};

export default WebUsers;
