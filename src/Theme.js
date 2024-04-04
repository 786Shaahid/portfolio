
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
     title: "Space Grotesk, sans-serif",
      main: "Diphylleia ",
      button:"sans-serif",
      subHeading:'Racing Sans One		'
  },
  palette: {
    primary: {
      main: '#854CE6',
    },
    background: {
      paper: '#222A35',
      default: '#19212C',
    },
    text: {
      primary: '#C8CFD8',
      secondary: '#F2F5F7',
      tertiary: '#626970',
      quaternary: '#575C66',
    },
    button: {
      main: '#854CE6',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536
    },
  },
});
