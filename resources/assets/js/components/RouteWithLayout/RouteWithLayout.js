import React, {useEffect,useState} from 'react';
import { Route,Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect, useDispatch, useSelector} from "react-redux";
import axios from "axios";
import SignIn from "../../views/SignIn";

import {getCurrentUserInfo} from "../../store/action-creators/session";

const RouteWithLayout = props => {
  const { layout: Layout, component: Component,authRequired, ...rest } = props;

 const dispatch = useDispatch();
 const [goToLoginPage,setLoginPage] = useState(false);
 const [isLoading,setLoading] = useState(true);


 useEffect(()=>{

   const getCurrentUser = async ()=>{


       try {

         await dispatch(getCurrentUserInfo());


         setLoading(false);
         setLoginPage(false);
       } catch (err) {
         console.log(err);
           setLoginPage(true);
           setLoading(false);

       }


   }
   getCurrentUser();

 },[dispatch]);


   if (goToLoginPage && authRequired) {


     return <Redirect to={"/sign-in"}/>
  }



  return (
    <Route
      {...rest}
      render={matchProps => (
        <div>
          {
          isLoading ? "Please wait...":(
        <Layout>
          {
            isLoading? "please wait ...":(
              <Component {...matchProps} />
            )
          }



        </Layout>
          )
        }
        </div>


      )}


    />
  );
};

RouteWithLayout.propTypes = {
  component: PropTypes.any.isRequired,
  layout: PropTypes.any.isRequired,
  path: PropTypes.string,

};



export default RouteWithLayout;
