import React from "react";
import CustomModal from "../../../components/CustomModal";
import {Button, Divider, Grid, TextField, Typography} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import {fetchReviewsFromSource} from "../../../store/action-creators/reviews/reviews";

import {makeStyles} from "@material-ui/styles";
import {useDispatch} from "react-redux";

const styles = makeStyles(theme=>({
  line: {
    margin: theme.spacing(2, 0, 2)
  }
}));

export default props=>{
   const classes = styles();
   const {product} = props;
   const [value,setValue] = React.useState('');
   const [locationId,setLocationId] = React.useState("");
   const dispatch  = useDispatch();

   const fetchReviews = async ()=>{
     await dispatch(fetchReviewsFromSource(value))
   }


   return(
     <CustomModal handleClose={props.handleClose} open={props.open}>
       <Grid container justify="center" alignItems="center">
         <Grid item xs={12} >
           <Typography variant="h4" align="center">
              Fetch {product.title} Reviews
           </Typography>
         </Grid>





         <Grid item xs={12} align="left">
           <Typography variant="subtitle2" gutterBottom>
             {product.title} Source
           </Typography>
           <Divider variant="fullWidth" component="hr" className={classes.line} />

           {/*<Typography variant="subtitle2" gutterBottom>*/}
           {/*  Enter Your Api Key*/}
           {/*</Typography>*/}

           {/*<TextField*/}
           {/*  fullWidth*/}
           {/*  id="outlined-multiline-static"*/}
           {/*  margin="normal"*/}
           {/*  multiline*/}
           {/*  placeholder="Enter your api key here"*/}
           {/*  rows={4}*/}
           {/*  value={value}*/}
           {/*  onChange={e=>setValue(e.target.value)}*/}
           {/*  variant="outlined"*/}
           {/*/>*/}

           <Typography variant="subtitle2" gutterBottom>
             Enter Your Location Id Key
           </Typography>

           <TextField
             fullWidth
             id="outlined-multiline-static"
             margin="normal"
             multiline
             placeholder="Enter your Business location id here"
             rows={2}
             value={value}
             onChange={e=>setValue(e.target.value)}
             variant="outlined"
           />

           <Grid align="center">

             <Typography variant="caption" align='center' display='block' gutterBottom>
               Please assure that your api key and connect widget is correct.
               If it is wrong then you cannot be able to fetch reviews from the source
             </Typography>

             <Button color="secondary" onClick={fetchReviews} variant="contained">
               Connect
             </Button>
           </Grid>

         </Grid>
       </Grid>
     </CustomModal>
   )
}

