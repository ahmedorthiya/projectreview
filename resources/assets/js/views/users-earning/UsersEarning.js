import React, {useCallback, useEffect, useState} from 'react';
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


  const [webResponse,setWebResponse] = useState("");
  const [loadMore,setLoadMore] = useState(true);

  const loadMoreUsers = ()=>{

    if(webResponse.current_page === webResponse.last_page) return setLoadMore(false);
    else if((webResponse.current_page+1) >= webResponse.last_page){
      setLoadMore(false);
    }

    const nextUrl = webResponse.next_page_url.substr(21,webResponse.next_page_url.length-21);

    loadEarningUsers(nextUrl);

  }

  const loadEarningUsers = useCallback(async (url)=>{

    const res = await axios.get(url);
    const list = [];

    console.log("res data is = ",res.data);

    for(let i =0; i< (res.data.length-1); i++){
      const jsonData = JSON.parse(res.data[i]);
      list.push({
        'name':jsonData.name,
        'email':jsonData.email,
        'phone':jsonData.phone,
        'amount':'$'+jsonData.amount,
        'payuser':<Button size={"small"} variant={"contained"} onClick={()=>userPaid(jsonData.id)} color={"primary"}>Done payment</Button>
      });
    }

    setWebResponse(res.data);
    setList(data=>data.concat(list));

  },[]);

  const userPaid = async (id)=>{
    await axios.put("/api/user-paid",{
      id
    }).then(()=>{
      setMsg("User payment successfully. Please refresh a page");
    });

  }

  useEffect(()=>{
    loadEarningUsers("/api/users-earning");


  },[loadEarningUsers])






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
      <br/>
      <div>
        <Button variant={"contained"} color={"primary"} onClick={loadMoreUsers} disabled={!loadMore}> Load More</Button>
      </div>

    </div>
  );
};

export default UsersEarning;
