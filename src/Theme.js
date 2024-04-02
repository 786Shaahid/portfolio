// export const  Theme= {
//     // Temp fonts
//     fonts: {
//       title: "Space Grotesk, sans-serif",
//       main: "Space Grotesk, sans-serif"
//     },
//     // Colors for layout
//     colors: {
//       primary1: "#854CE6",
//       background1: "#222A35",
//       button: "#854CE6",
//       background2: "#19212C",
//       text: "#C8CFD8",
//       text1: "#F2F5F7",
//       text2: "#626970",
//       text3: "#575C66",
//       footerBackground: "#00012B"
//     },
//     // Breakpoints for responsive design
//     breakpoints: {
//       sm: 'screen and (max-width: 640px)',
//       md: 'screen and (max-width: 768px)',
//       lg: 'screen and (max-width: 1024px)',
//       xl: 'screen and (max-width: 1280px)'
//     },
//   }

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
