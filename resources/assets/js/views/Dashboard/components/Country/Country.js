import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  LinearProgress
} from '@material-ui/core';

// we display a list instead of chart
//import { Doughnut } from 'react-chartjs-2';
//import { data, options } from './chart';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%'
  },
  chartContainer: {
    height: 410,
    position: 'relative'
  },
  actions: {
    justifyContent: 'flex-end'
  }
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('United States', 959, 90.0),
  createData('United Kingdom', 237, 70.0),
  createData('Germany', 62, 50.0),
  createData('China', 35, 23.7),
  createData('Israel', 16, 6.0),
];

const Country = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        title="Customer Distribution"
      />
      <Divider />
      <CardContent>
        <div className={classes.chartContainer}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Country</TableCell>
                <TableCell align="left">Users</TableCell>
                <TableCell align="left">% Users</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.calories}</TableCell>
                  <TableCell align="left">
                    <div className={classes.root}>
                      <LinearProgress variant="determinate" value={row.fat} color="secondary" style={{height: 20}}/>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

Country.propTypes = {
  className: PropTypes.string
};

export default Country;
