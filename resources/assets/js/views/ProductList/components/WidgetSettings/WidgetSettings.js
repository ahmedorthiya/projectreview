import React from 'react';
import { Paper, Typography, Radio, RadioGroup, FormControlLabel, FormControl, Grid, Checkbox, CardContent, Card, Divider } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Rating from '@material-ui/lab/Rating';

const GreenRadio = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(3),
    display: 'flex'
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  widget: {
    maxWidth: 300
  },
  spaced : {
    margin: theme.spacing(3),
  },
  spacer: {
    flexGrow: 1
  }
}));

const WidgetSettings = () => {

  const classes = useStyles();

  const [selectedValue, setSelectedValue] = React.useState('a');
  const [value, setValue] = React.useState('left');
  const [ checked, setChecked ] = React.useState(false);

  const handleChecked = () => {
    setChecked(!checked);
  }

  const handlePositionChange = (event) => {
    setValue(event.target.value);
  };

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return(
    <Paper className={classes.root} >
      <Grid
        item
        sm={6} 
        xs={12}
      >
        <Typography gutterBottom variant="h4">Widget Settings</Typography>
        <br/>
        <Typography gutterBottom variant="body1">Choose background color</Typography>
        <div>
          <Radio
            checked={selectedValue === 'a'}
            inputProps={{ 'aria-label': 'A' }}
            name="radio-button-demo"
            onChange={handleChange}
            value="a"
          />
          <Radio
            checked={selectedValue === 'b'}
            inputProps={{ 'aria-label': 'B' }}
            name="radio-button-demo"
            onChange={handleChange}
            value="b"
          />
          <GreenRadio
            checked={selectedValue === 'c'}
            inputProps={{ 'aria-label': 'C' }}
            name="radio-button-demo"
            onChange={handleChange}
            value="c"
          />
          <Radio
            checked={selectedValue === 'd'}
            color="default"
            inputProps={{ 'aria-label': 'D' }}
            name="radio-button-demo"
            onChange={handleChange}
            value="d"
          />
          <Radio
            checked={selectedValue === 'e'}
            color="default"
            inputProps={{ 'aria-label': 'E' }}
            name="radio-button-demo"
            onChange={handleChange}
            size="small"
            value="e"
          />
        </div>
        <br/>
        <FormControl component="fieldset">
          <Typography gutterBottom variant="body1">Choose position</Typography>
          <RadioGroup aria-label="gender" name="gender1" onChange={handlePositionChange} value={value}>
            <FormControlLabel control={<Radio />} label="Left Side" value="left" />
            <FormControlLabel control={<Radio />} label="Right Side" value="right" />
          </RadioGroup>
        </FormControl>
        <br/>
        <Divider className={classes.spaced} />
        <FormControlLabel
          control={
            <Checkbox
              checked={checked}
              color="secondary"
              name="checkedB"
              onChange={handleChecked}
            />
          }
          label="Show by default all of the positive reviews (4+ stars)"
        />
      </Grid>

      <Grid
        item
        sm={6} 
        xs={12}
      >
        <Typography gutterBottom variant="h4">Preview of the Widget</Typography>
        <br/>
        <Card className={classes.widget}>
          <CardContent>
            <Rating name="read-only" readOnly value={5} />
            <Typography gutterBottom>5/5 Star Reviews - 1 April, 2020</Typography>
            <Typography variant="h6" >Someone</Typography>
            <Typography gutterBottom variant="caption">Review will go here</Typography>
            <Divider/>
          </CardContent>
          <CardContent>
            <Rating name="read-only" readOnly value={5} />
            <Typography gutterBottom>5/5 Star Reviews - 1 April, 2020</Typography>
            <Typography variant="h6" >Someone</Typography>
            <Typography gutterBottom variant="caption">Review will go here</Typography>
            <Divider/>
          </CardContent>
          <CardContent>
            <span className={classes.spacer} />
            <label>
                Powered by 
            </label>
            <img
              alt="Logo"
              src="/images/logos/logo-new-small.png"
              style={{width: 80}}
            />
          </CardContent>
        </Card>
      </Grid>


    </Paper>
  )
}

export default WidgetSettings;