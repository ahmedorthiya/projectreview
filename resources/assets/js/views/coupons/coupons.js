import React, {useCallback, useEffect, useState} from 'react';
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

const Coupons = props => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const {className,...rest} = props;
  const [couponsList,setList] = useState([]);


  useEffect(()=>{
     const retrieve = async ()=>{

       const resProduct = await axios.post("https://vendors.paddle.com/api/2.0/product/list_coupons",{
         vendor_id:114252,
         vendor_auth_code:"220a20ebb20bd308596b2e444877da2120d652ad7a1f3f39a6",
         product_id:593800

       })

     //  console.log("resproduct ",resProduct.data.response);

       let list = [];
       resProduct.data.response.map(data=>{
         const {allowed_uses,coupon,descripton,discount_amount,discount_current,discount_type,expires,is_recurring,times_used} = data;

         const date = new Date(expires);

         list.push({
         allowed_uses,
         coupon,
         descripton,
         discount_amount:parseFloat(discount_amount).toFixed(2),
         discount_current,
         discount_type,
           expires,
         is_recurring,times_used,


       })





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
        In order to create coupons go to paddle.com > login > catalog > subscription plans > click on the three dots > click on coupons
      </Typography>

      <div >

        <br/>
        <CustomTable color={'white'} headings={['Allowed Uses','Name','Description','Discount %','Discount Currency','Discount Type','Expires','Recurring','Times used']} data={couponsList}

            />



      </div>
    </div>
  );
};

export default Coupons;
