import axios from 'axios'

import { userActions } from 'store/actions'
import {sessionActions} from "store/actions";

export const getCurrentUserInfo = () => async dispatch => {
  const response = await axios.get('/api/users/me')




  dispatch({
    type: userActions.SET_CURRENT_USER_INFO,
    users: response.data.data
  })

  return response.data.data
}


export const logout = ()=>async dispatch=>{
  const response = await axios.get("/api/logout");
  // logout

  dispatch({
    type: sessionActions.LOGOUT,

  })



}

export const logIn = loginDetails => async dispatch => {

  const response = await axios.post('/api/login', loginDetails)



  dispatch({
    type: userActions.SET_CURRENT_USER_INFO,
    users: response.data.data
  })

  return response.data.data
}
