import React, {useContext, useCallback, useEffect} from 'react';
import {WidgetContext }from '../../WidgetContext';
import { CirclePicker } from 'react-color';
import { Paper, Typography, Radio, RadioGroup, FormControlLabel, FormControl, Grid, Checkbox, CardContent, Card, Divider } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { blue, yellow, red } from '@material-ui/core/colors';
import Rating from '@material-ui/lab/Rating';

const GreenRadio = withStyles({
  root: {
    color: blue[400],
    '&$checked': {
      color: blue[600],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

const YellowRadio = withStyles({
  root: {
    color: yellow[400],
    '&$checked': {
      color: yellow[600],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

const RedRadio = withStyles({
  root: {
    color: red[400],
    '&$checked': {
      color: red[600],
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
    maxWidth: 550
  },
  spaced : {
    margin: theme.spacing(3),
  },
  spacer: {
    flexGrow: 1
  }
}));

const WidgetSettings = () => {
  const myState = useContext(WidgetContext);
  const classes = useStyles();
  const [bgColor, setBgColor] = React.useState('#edb100')
  const [selectedValue, setSelectedValue] = React.useState('yellow');
  const [value, setValue] = React.useState('left');
  const [ checked, setChecked ] = React.useState(false);

  const handleChecked = () => {
    setChecked(!checked);
  }
  useEffect(() => {
    myState.setState(state => {
      return {
        ...state,
        color:selectedValue
      }
    })
  },[selectedValue]);

  const handlePositionChange = (event) => {
    setValue(event.target.value);
  };
  
  const handleChange = useCallback((color) => {
    const selectedColor = color.hex;
    switch(selectedColor) {
      case '#edb100': setSelectedValue('yellow');
                      setBgColor(selectedColor);
        break;
      case '#ff0000': setSelectedValue('red');
                      setBgColor(selectedColor);
        break;
      case '#005ab6': setSelectedValue('blue');
                      setBgColor(selectedColor);
      break;
      default : setSelectedValue('yellow');
                setBgColor(selectedColor);
    }
  },[setSelectedValue,setBgColor]);

  const {color} = myState.state;

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
          <CirclePicker
            colors={["#005ab6","#edb100","#ff0000"]}
            color={bgColor}
            onChange={handleChange}
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
        {
          color === 'yellow' &&
          <Card className={classes.widget}>
          <CardContent>
            <span className={classes.spacer} />
            <img
              alt="Logo"
              src="/images/widgets/yellow-widget.png"
              style={{width: 500}}
            />
          </CardContent>
        </Card>
        }
        {
          color === 'red' &&
          <Card className={classes.widget}>
          <CardContent>
            <span className={classes.spacer} />
            <img
              alt="Logo"
              src="/images/widgets/red-widget.png"
              style={{width: 500}}
            />
          </CardContent>
        </Card>
        }
        {
          color === 'blue' &&
          <Card className={classes.widget}>
          <CardContent>
            <span className={classes.spacer} />
            <img
              alt="Logo"
              src="/images/widgets/blue-widget.png"
              style={{width: 500}}
            />
          </CardContent>
        </Card>
        }
        
      </Grid>


    </Paper>
  )
}

export default WidgetSettings;
