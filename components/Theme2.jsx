import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';

export const themeOptions = ThemeOptions({
  palette: {
    type: 'light',
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#00b0ff',
    },
  },
  shape: {
    borderRadius: 4,
  },
  props: {
    MuiAppBar: {
      color: 'default',
    },
  },
})