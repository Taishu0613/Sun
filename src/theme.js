// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light', // または 'dark'

    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },

    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
  },

  typography: {
    fontFamily: [
      'Roboto',
      '"Noto Sans JP"',
      'sans-serif',
    ].join(','),
  },

  components: {
    // Button のデフォルト設定
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          textTransform: 'none',
        },
      },
    },
  },
});

export default theme;
