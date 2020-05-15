import React from 'react';

//Material-UI
import { Typography, TextField, Button, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(5)
  },
  textInput: {
    borderStyle: 'dashed',
    borderWidth: 2,
    borderColor: theme.palette.divider
  }
}));

const Widget = ({text, code}) => {
  const classes = useStyles();

  return(
    <Container className={classes.root} maxWidth="sm">
      <Typography align="center" gutterBottom variant='subtitle2'>
        {text}
      </Typography>
      
      <TextField
        className={classes.textInput}
        defaultValue={code}
        //disabled
        fullWidth
        id="filled-basic"
        InputProps={{ disableUnderline: true }}
        margin="normal"
        multiline
        variant="filled"
      />

      <Button color="secondary" style={{marginRight: 20}} variant="contained">Copy Code</Button>
      <Button color="secondary" variant="contained">Send to Developer</Button>

    </Container>
  )
}

export default Widget;