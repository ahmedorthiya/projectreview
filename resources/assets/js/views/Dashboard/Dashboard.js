import React, {useCallback, useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';


import {
  Budget,
  TotalUsers,
  TasksProgress,
  TotalProfit,
  LatestSales,
  UsersByDevice,
  LatestProducts,
  LatestOrders,
  Ratings,
  Country,
  AverageRating
} from './components';
import {useDispatch, useSelector,shallowEqual} from "react-redux";
import {getReviewsInfo} from "../../store/action-creators/reviews";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  }
}));

const Dashboard = () => {
  const classes = useStyles();
 const reviewsInfo = useSelector(state=>state.reviews.generalInfo,shallowEqual);







 const dispatch = useDispatch();


 const fetchReviews = useCallback(async ()=>{


   return await dispatch(getReviewsInfo());

 },[dispatch]);

 useEffect(()=>{
   fetchReviews();
 },[fetchReviews]);





  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={2}
      >
        <Grid
          item
          lg={4}
          sm={6}
          xl={4}
          xs={12}
        >



          <TotalProfit totalreviews={reviewsInfo.total_reviews ? reviewsInfo.total_reviews : 0} />
        </Grid>

        <Grid
          item
          lg={4}
          sm={6}
          xl={4}
          xs={12}
        >
          <AverageRating avgrating={reviewsInfo.average_rating ? reviewsInfo.average_rating : 0} />
        </Grid>
        <Grid
          item
          lg={4}
          sm={6}
          xl={4}
          xs={12}
        >

          <Ratings
            fivestar={reviewsInfo.total_five_star_users ? reviewsInfo.total_five_star_users : 0}
            fourstar={reviewsInfo.total_four_star_users ? reviewsInfo.total_four_star_users : 0}
            threestar={reviewsInfo.total_three_star_users ? reviewsInfo.total_three_star_users : 0}
            twostar={reviewsInfo.total_two_star_users ? reviewsInfo.total_two_star_users : 0}
            onestar={reviewsInfo.total_one_star_users ? reviewsInfo.total_one_star_users : 0}
          />
        </Grid>

        <Grid
          item
          lg={4}
          sm={6}
          xl={4}
          xs={12}
        >
          <Budget uniquevisitors={reviewsInfo.unique_visitors ? reviewsInfo.unique_visitors : 0} />
        </Grid>
        <Grid
          item
          lg={4}
          sm={6}
          xl={4}
          xs={12}
        >
          <TotalUsers totalusers={reviewsInfo.total_users ? reviewsInfo.total_users : 0} />
        </Grid>
        <Grid
          item
          lg={4}
          sm={6}
          xl={4}
          xs={12}
        >
          <TasksProgress newreviews={reviewsInfo.new_reviews ? reviewsInfo.new_reviews : 0}/>
        </Grid>
        <Grid
          item
          lg={8}
          md={12}
          xl={9}
          xs={12}
        >
          <Country countries={reviewsInfo.locations ? reviewsInfo.locations : []}/>

        </Grid>
        <Grid
          item
          lg={4}
          md={6}
          xl={3}
          xs={12}
        >
          <UsersByDevice />
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
