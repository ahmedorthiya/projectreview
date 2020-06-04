import React, {useEffect,useState} from 'react';
import { Route,Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect, useDispatch, useSelector} from "react-redux";
import axios from "axios";
import SignIn from "../../views/SignIn";

import {getCurrentUserInfo} from "../../store/action-creators/session";

const RouteWithLayout = props => {
  const { layout: Layout, component: Component,authRequired,admin, ...rest } = props;

 const dispatch = useDispatch();

 const [isLoading,setLoading] = useState(true);
 const [currentUser,setCurrentUser] = useState({
   login:false,
   data:"",
 });




 useEffect(()=>{

   const getCurrentUser = async ()=>{

     const linkedIn = await axios.get("/v1/people/~:(recommendations-received)",{
       headers:{
         Host: 'api.linkedin.com',
         Connection: 'Keep-Alive',
         Authorization: 'Bearer AQWTrm7dJGDkVWu_qEmyfqAG7rhaphmfJA48bfE8CQDbMcuGDjwjW4G37bsVimffDw4qwyzdDqbEw47U-wm2P6uiLso7aTPhKNDRcvXxT2CNpQRovAco7VwLz6fxmxvBYbUVeDojvk_cAuYo-7_bTWgt47C9JRbwPAxGATHFrWzDY7PDZ45GQ7YWsEBvw1TvTu_w_SaCR_ckUinJfbKQ_GS8sll4Y5bkfPXUoNmuRZOydWDwde8WJoOXFBXV4Vqdl-UwhAuBINmFvFq8qcGVtyzrpuokDxWxUOUviVwtzQQaLISJ2sMwoVfMLBOi1Z1-XtvBzlNP54p6RN80hQSIlOzzfSIufQ'
       }
     });


       try {

        const res=  await dispatch(getCurrentUserInfo());





         setLoading(false);

         setCurrentUser(data=>(
           {
             login:false,
             data:res
           }
         ));
       } catch (err) {
         console.log(err);



           setCurrentUser(data=>(
             {
               login:true,
               data:""
             }
           ));
         setLoading(false);

       }


   }
   getCurrentUser();

 },[dispatch]);





   if (currentUser.login && authRequired) {
        // required login
        return <Redirect to={"/sign-in"}/>
  }else if(!currentUser.login && authRequired && admin && currentUser.data.account_type === 'user'){
   //  already login  and required admin rights so when
     //  user try to visit admin route then

     if(currentUser.login)
       return <Redirect to={"/sign-in"}/>
     else return <Redirect to={"/dashboard"}/>

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
