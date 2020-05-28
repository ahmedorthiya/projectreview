import React, { useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/styles';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';



import CustomTable from "../../components/table";

import clsx from "clsx";
import {Typography,Button} from "@material-ui/core";
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

const UsersEarning = props => {
  const classes = useStyles();

  const {className,...rest} = props;


  const [usersList,setList] = useState([]);
  const [msg,setMsg] = useState("");

  const userPaid = async (id)=>{
    await axios.put("/api/user-paid",{
      id
    }).then(()=>{
      setMsg("User payment successfully. Please refresh a page");
    });

  }

  useEffect(()=>{
    const retrieve = async ()=>{

      const res = await axios.get("/api/users-earning");
      const list = [];
     res.data.map(data=>{
       const jsonData = JSON.parse(data);
       list.push({
         'name':jsonData.name,
         'email':jsonData.email,
         'phone':jsonData.phone,
         'amount':'$'+jsonData.amount,
         'payuser':<Button size={"small"} variant={"contained"} onClick={()=>userPaid(jsonData.id)} color={"primary"}>Done payment</Button>
       });
     })

      setList(list);

 }


    retrieve();


  },[])






  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >

      <Typography variant={"subtitle2"}>
        Please first pay the user and then update the user status
      </Typography>

      {
        msg ? (
      <Typography style={{color:"red"}} variant={"subtitle2"}>
        {
          msg
        }
      </Typography>):""
      }

      <div >

        <br/>
        <CustomTable color={'white'} headings={['Name','Email','Phone','Amount','Pay user']} data={usersList}

            />



      </div>
    </div>
  );
};

export default UsersEarning;
