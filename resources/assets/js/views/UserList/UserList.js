import React, {useCallback, useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/styles';

import { UsersToolbar, UsersTable } from './components';
import mockData from './data';
import {useDispatch, useSelector} from "react-redux";
import {myReviews} from "../../store/action-creators/reviews/reviews";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const UserList = () => {
  const classes = useStyles();

  // const [users] = useState(mockData);
  const myreviews = useSelector(state=>state.reviews.myReviews);
 const dispatch = useDispatch();

  const fetchReviews = useCallback(async ()=>{

    await dispatch(myReviews());

  },[dispatch]);

  useEffect(()=>{
      fetchReviews();
  },[fetchReviews])




  return (
    <div className={classes.root}>
      <UsersToolbar />
      <div className={classes.content}>
        <UsersTable users={myreviews} />
      </div>
    </div>
  );
};

export default UserList;
