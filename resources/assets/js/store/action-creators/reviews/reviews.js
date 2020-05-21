export const REVIEWS_INFO = "REVIEWS_INFO";
export const MY_REVIEWS = "MY_REVIEWS";
import axios from "axios";

export const getReviewsInfo = ()=>async dispatch=>{

  const res = await axios.get("/api/reviews-info/1");   //1 mean user id,
  const resLocations = await axios.get("/api/reviewer-locations/1");



  dispatch({
    type:REVIEWS_INFO,
    payload:{
      ...res.data,
      locations:resLocations.data,
    },
  })

  return res.data;
}

export const myReviews = ()=>async dispatch=>{
  const res = await axios.get("/api/user-reviews/1");

  dispatch({
    type:MY_REVIEWS,
    payload:res.data,
  })

}


export const fetchReviewsFromSource = (src)=>async dispatch=>{
  const res = await axios.get(src)
  console.log("response is = ",res);
}



