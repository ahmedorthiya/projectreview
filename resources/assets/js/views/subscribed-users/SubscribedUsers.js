import React, { useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/styles';


import EditIcon from '@material-ui/icons/Edit';
import {useDispatch, useSelector} from "react-redux";

import CustomTable from "../../components/table";

import clsx from "clsx";
import {Typography} from "@material-ui/core";
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

const SubscribedUsers = props => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  // const [users] = useState(mockData);
  const myreviews = useSelector(state=>state.reviews.myReviews);
  const dispatch = useDispatch();
  const {className,...rest} = props;


  const [subscribedUsersList,setList] = useState([]);


  useEffect(()=>{
    const retrieve = async ()=>{

      const res = await axios.post("https://vendors.paddle.com/api/2.0/subscription/users",{
        vendor_id:114252,
        vendor_auth_code:"f7f3fdcdad4a6a174318501b842687fa5447c43c2efd7c5b01",

        state:'active',
      })


      const list = [];
      res.data.response.map(data=>{
         list.push({email,state,last_payment,next_payment} = data);


      })


      setList(list);



    }


    retrieve();


  },[])



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

      <Typography variant={"subtitle2"}>
        Check subscribed users by
        paddle.com > login > customers > subscribers
      </Typography>

      <div >

        <br/>
        <CustomTable color={'white'} headings={['Email','State','Last Payment','Next Payment']} data={subscribedUsersList}

            />



      </div>
    </div>
  );
};

export default SubscribedUsers;
