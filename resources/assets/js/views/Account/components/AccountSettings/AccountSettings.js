import React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  Avatar,
  Typography,
  Divider,
  Button,
  TextField,
  Checkbox,
  FormControlLabel
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
const useStyles = makeStyles(theme => ({
  root: {},
  divider: {
    margin: theme.spacing(2, 0)
  }  
    
}));

const AccountSettings = () => {
  const classes = useStyles();

  return(
    <Card>
      <CardContent>
        <Typography
          gutterBottom
          variant="h4"
        >
                    Email Settings
        </Typography>
        <FormControlLabel
          control={
            <Checkbox
              checked={true}
              onChange={() => {}}
              name="checkedB"
              color="primary"
            />
          }
          label="Send me every week reviews summary"
        />

        <Divider  />
          <br/>
        <Typography
          gutterBottom
          variant="h4"
        >
                    API Settings
        </Typography>
        <TextField id="outlined-basic" label="API KEY" fullWidth variant="outlined" />
      </CardContent>
    </Card>
  );
}

export default AccountSettings;