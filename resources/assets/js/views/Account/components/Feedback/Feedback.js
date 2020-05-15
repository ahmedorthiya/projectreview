import React from 'react';
import { Typography, Card, CardContent, TextField, Link, Button, Avatar } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';

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
    return(
        <Card>
            <CardContent>
                <Typography variant="h4" gutterBottom>Business Logo</Typography>
                <Avatar className={classes.large} >LOGO</Avatar>
                <Typography variant="h6" gutterBottom>Text to display after user submit the review</Typography>
                <TextField
                    id="outlined-multiline-static"
                    multiline
                    rows={4}
                    variant="outlined"
                    fullWidth
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
            </CardContent>
        </Card>
    )
}

export default Feedback;