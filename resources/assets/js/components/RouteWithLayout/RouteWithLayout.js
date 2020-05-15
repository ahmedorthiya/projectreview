import React, {useEffect,useState} from 'react';
import { Route,Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect, useDispatch, useSelector} from "react-redux";
import axios from "axios";
import SignIn from "../../views/SignIn";

import {getCurrentUserInfo} from "../../store/action-creators/session";

const RouteWithLayout = props => {
  const { layout: Layout, component: Component, ...rest } = props;

 const dispatch = useDispatch();
 const [goToLoginPage,setLoginPage] = useState(false);

 useEffect(()=>{

   const getCurrentUser = async ()=>{

       try {

         await dispatch(getCurrentUserInfo());
         setLoginPage(false);
       } catch (err) {
           setLoginPage(true);
       }


   }
   getCurrentUser();

 },[dispatch]);


 if(goToLoginPage){
   if(props.path !== "/sign-in")
   return <Redirect to={"/sign-in"}/>
 }



  return (
    <Route
      {...rest}
      render={matchProps => (
        <Layout>
          <Component {...matchProps} />


        </Layout>
      )}
    />
  );
};

RouteWithLayout.propTypes = {
  component: PropTypes.any.isRequired,
  layout: PropTypes.any.isRequired,
  path: PropTypes.string
};



export default RouteWithLayout;
