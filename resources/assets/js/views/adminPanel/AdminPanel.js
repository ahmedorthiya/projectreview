import React, {useCallback, useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid,Typography,Card } from '@material-ui/core';
import axios from "axios";


import {useDispatch, useSelector,shallowEqual} from "react-redux";
import {getReviewsInfo} from "../../store/action-creators/reviews";
import LineChartExample from "./components/Line";
import {forEach} from "underscore";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  total_profit:{
    padding:'20px 20px 30px 20px'
  }
}));

const AdminPanel = () => {
  const classes = useStyles();
  const reviewsInfo = useSelector(state=>state.reviews.generalInfo,shallowEqual);
  const [data,setData] = useState({
    totalUsers:0,
    totalSubscribedUsers:0,
    totalEarning:0,
  });

  const dispatch = useDispatch();

  const loadData = useCallback(async ()=>{

    const totalUserRes = await axios.get("/api/total-users-count");



    const res = await axios.post("https://vendors.paddle.com/api/2.0/subscription/users",{
      vendor_id:114252,
      vendor_auth_code:"f7f3fdcdad4a6a174318501b842687fa5447c43c2efd7c5b01",


    },{
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
      }
    });

    let totalEarning = 0;
    if(res.data.response.length > 0){
      //  mean subscriber found

      res.data.response.map(row=>{
        totalEarning += row.last_payment.amount;
      })

    }

    setData(data=>({
      ...data,
      totalUsers: totalUserRes.data,
      totalEarning,


    }))




  },[dispatch]);

  useEffect(()=>{

     loadData();


  },[loadData])


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

          <Card className={classes.total_profit}>
            <Typography variant={"h3"} >
              Total Profit:
            </Typography>
            <br/>

            <Typography  variant={"subtitle2"}>
              Available in the paddle dashboard
            </Typography>
          </Card>
        </Grid>




        <Grid
          item
          lg={4}
          sm={6}
          xl={4}
          xs={12}
        >
          <Card  className={classes.total_profit}>
            <Typography  variant={"h3"} >
              Total users:
            </Typography>
            <br/>

            <Typography   variant={"subtitle2"}>
              {data.totalUsers}
            </Typography>
          </Card>


        </Grid>
        <Grid
          item
          lg={4}
          sm={6}
          xl={4}
          xs={12}
        >
          <Card className={classes.total_profit}>
            <Typography variant={"h3"} >
              Total subscribed Users:
            </Typography>
            <br/>

            <Typography  variant={"subtitle2"}>
              {
                data.totalSubscribedUsers
              }
            </Typography>
          </Card>
        </Grid>

        <Grid
          item
          lg={8}
          md={12}
          xl={9}
          xs={12}
        >

          <Card className={classes.total_profit}>
          <LineChartExample totalearning={data.totalEarning} totalsubscribedusers={data.totalSubscribedUsers}/>
          </Card>

        </Grid>

      </Grid>
    </div>
  );
};

export default AdminPanel;
