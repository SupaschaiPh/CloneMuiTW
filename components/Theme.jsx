import { createTheme } from '@mui/material/styles';

export const theme1 = createTheme({
  palette: {
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
    fontFamily: "'Noto Sans Thai Looped','Noto Sans Thai',sans-serif",
  },
  props: {
    MuiAppBar: {
      color: 'default',
    },
  },
});