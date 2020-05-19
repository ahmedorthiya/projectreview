import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Bar, HorizontalBar } from 'react-chartjs-2';
import { makeStyles } from '@material-ui/styles';

import {
  Card,

  CardContent,

} from '@material-ui/core';


import {  options } from './chart';
import palette from "../../../../theme/palette";

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

  const data={
    labels: ['5 Stars', '4 Stars', '3 Stars', '2 Stars', '1 Star'],
    datasets: [
      {
        label: 'Reviews',
        backgroundColor: palette.primary.main,
        data: [props.fivestar, props.fourstar, props.threestar, props.twostar, props.onestar]
      }
    ]
  };

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
