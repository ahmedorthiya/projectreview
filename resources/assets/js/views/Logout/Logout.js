import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {logout} from "../../store/action-creators/session";

const Logout = props=>{
 const dispatch = useDispatch();
 useEffect(()=>{
   const logoutUser = async ()=>{
     await dispatch(logout());
     props.history.push("/sign-in");
   }
   logoutUser();
 },[dispatch]);

  return(
    <div>
      Please wait we are logging you out
    </div>
  )
}

export default Logout;
