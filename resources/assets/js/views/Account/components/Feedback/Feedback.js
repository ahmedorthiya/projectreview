import React from 'react';
import { Typography, Card, CardContent, TextField, Link, Button, Avatar } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';
import FormData from "form-data";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
    large: {
      width: 120,
      height: 120,
      marginTop: 25,
      marginBottom: 25
    },
  }));

const Feedback = () => {
    const classes = useStyles();
    const [text,setText] = React.useState("");
    const [avatar,setAvatar] = React.useState("");
    const [rating,setRating] = React.useState(0);
    const [msg,setMsg] = React.useState("");

    const submitForm = async (e)=>{
      e.preventDefault();
     if(text !== "" && avatar !== ""){
       const formData = new FormData();
       formData.append("business_logo",avatar[0]);
       formData.append("feedback_text",text);
       formData.append("rating",rating);

       const data = await axios.post("/api/submit-feedback",formData);
       console.log("data is = ",data);
     }
    }
    return(
        <Card>
            <CardContent>
                <Typography variant="h4" gutterBottom>Business Logo</Typography>
                <Avatar className={classes.large} >LOGO</Avatar>
                <Typography variant="h6" gutterBottom>Text to display after user submit the review</Typography>
              <form onSubmit={submitForm} encType={"multipart/form-data"}>
                <TextField
                    id="outlined-multiline-static"
                    multiline
                    rows={4}
                    variant="outlined"
                    fullWidth
                    value={text}
                    onChange={e=>setText(e.target.value)}
                    margin="normal"
                />
                <br/><br/>
                <Typography variant="h4" gutterBottom>Signature Snippet</Typography>
                <br/>
                <Typography variant="body1" gutterBottom>Highlight the signature snippet and copy/paste into email.</Typography>
                <br/>
                <Card>
                    <CardContent>
                        <Typography variant="h6" gutterBottom>How did we do?</Typography>
                        <Rating
                            name="simple-controlled"
                            value={rating}
                            onChange={e=>setRating(e.target.value)}
               />
                        <br/>
                        <Typography variant="body1" gutterBottom>
                            <Link href="#" onClick={() => {} } color="secondary">
                                Click to rate your experience with Best Buns
                            </Link>
                        </Typography>
                    </CardContent>
                </Card>
                <br/>
                <Button variant="contained" color="secondary" disableElevation>
                    Copy to Clipboard
                </Button>
              <Button variant="contained" color={"primary"} type={"submit"}  disableElevation>
                Submit
              </Button>


              <Typography variant={"subtitle2"}>Upload new logo</Typography>
              <input type={"file"} onChange={e=>setAvatar(e.target.files)} accept="image/x-png,image/gif,image/jpeg"/>
              </form>
              <br/><br/>
              <Typography variant={"subtitle2"}>
                {
                  msg
                }
              </Typography>
            </CardContent>
        </Card>
    )
}

export default Feedback;
