import React, {Component} from 'react';
import { Line } from 'react-chartjs-2';
import {Typography} from "@material-ui/core";


export default class LineDemo extends Component {
  constructor(props) {
    super(props);
    this.data = {
      labels: [this.props.totalSubscribedUsers],
      datasets: [
        {
          label: 'My First dataset',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [this.props.totalEarning]
        }
      ]
    };
  }



  render() {
    return (
      <div>
        <h2>Earning</h2>
        <Line ref="chart" data={this.data} />
        <br/>
        <Typography>X-axios: number of subscribed users</Typography>
        <Typography>Y-axios: Total Earning</Typography>
      </div>
    );
  }

  componentDidMount() {
    const { datasets } = this.refs.chart.chartInstance.data

  }
}
