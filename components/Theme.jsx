import { createTheme } from '@mui/material/styles';

export const theme1 = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#039be5',
    },
    secondary: {
      main: '#000000',
    },
    error: {
      main: '#ff0500',
    },
    background: {
      default: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'Noto Sans Thai Looped',
  },
  props: {
    MuiAppBar: {
      color: 'default',
    },
  },
});