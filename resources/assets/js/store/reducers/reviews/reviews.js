import {REVIEWS_INFO} from "../../action-creators/reviews";
import {MY_REVIEWS} from "../../action-creators/reviews/reviews";

const initialState = {
  generalInfo:{},
  myReviews:[],
}

export default (state=initialState,actions)=>{
  switch (actions.type) {
    case REVIEWS_INFO:
      return {
        ...state,
        generalInfo: {...state.generalInfo,...actions.payload}
      }
    case MY_REVIEWS:{
      return {
        ...state,
        myReviews: [...state.myReviews,...actions.payload]
      }
    }
    default:
      return state;
  }

}
