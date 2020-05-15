import { createMuiTheme } from '@material-ui/core';

import palette from './palette';
import typography from './typography';
import overrides from './overrides';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  palette:{
    ...palette,
    myGreen: green
  },
  typography,
  overrides,
  zIndex: {
    appBar: 1200,
    drawer: 1100
  }
});

export default theme;
