import React, { Lazy, Suspense, Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Chart } from 'react-chartjs-2';
import { ThemeProvider } from '@material-ui/styles';
import validate from 'validate.js';

import { Provider } from 'react-redux'
import { ModalProvider } from 'react-context-modals'

import { AuthGuard, FlashMessageRoot } from 'components'
import { history } from 'utils/history'
import { store } from 'store/create-store'
import { DashboardLayout, FormPageLayout } from 'layouts'

import { chartjs } from './helpers';
import theme from './theme';
//import 'react-perfect-scrollbar/dist/css/styles.css';
//0import './assets/scss/index.scss';
import validators from './common/validators';
import Routes from './Routes';


const browserHistory = createBrowserHistory();

Chart.helpers.extend(Chart.elements.Rectangle.prototype, {
  draw: chartjs.draw
});

validate.validators = {
  ...validate.validators,
  ...validators
};

export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Provider store={store}>

          <Router history={browserHistory}>
            <Routes />
          </Router>
        </Provider>
      </ThemeProvider>
    );
  }
}
