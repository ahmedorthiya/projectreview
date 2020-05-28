import React from "react";
import {Grid,Card,CardContent,CardActions,Button,Typography,TextField} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import {useSelector} from "react-redux";
import axios from "axios";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth:400,
    margin:"20px auto",
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
    color:'black',
  },
  pos: {
    marginBottom: 12,
  },
});

const ReferralLink = props=>{
  const classes = useStyles();

  const [referral,setReferral]= React.useState("");
  const [referredBy,setReferredBy] = React.useState("");
  const currentUser = useSelector(state=>state.entities.users[state.session.currentUser]);

  React.useEffect(()=>{
    const getReferredByInfo = async ()=>{
      const res = await axios.get("/api/referred-by");
      if(res.data !== ""){
        setReferredBy(res.data);
      }
    }
    getReferredByInfo();
  },[]);



  const generateReferral = ()=>{
    setReferral("localhost:9000/sign-up?ref="+currentUser.slug);
  }

  return(
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography  variant={"h1"} gutterBottom>
          Referral
        </Typography>
        {
          referredBy ? ( <Typography  component={"p"}  gutterBottom>
          You are  Referred by {referredBy.first_name +" "+ referredBy.last_name}
          </Typography>): ""
        }


        {
          referral ? (
            <TextField fullWidth value={referral} style={{width:"100%"}} onChange={e=>setReferral(e.target.value)}/>
            ): <div></div>
        }

      </CardContent>
      <CardActions>
        <Button size="small" variant={"contained"} onClick={generateReferral} color={"secondary"}>Generate Referral</Button>
      </CardActions>
    </Card>
  )
}

export default ReferralLink;
