import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Bar, HorizontalBar } from 'react-chartjs-2';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Button
} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

import { data, options } from './chart';

const useStyles = makeStyles(() => ({
  root: {},
  chartContainer: {
    height: 100,
    position: 'relative'
  },
  actions: {
    justifyContent: 'flex-end'
  }
}));

const Ratings = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      
      <CardContent>
        <div className={classes.chartContainer}>
          <HorizontalBar
            data={data}
            options={options}
          />
        </div>
      </CardContent>
      
    </Card>
  );
};

Ratings.propTypes = {
  className: PropTypes.string
};

export default Ratings;
