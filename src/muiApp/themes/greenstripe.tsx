import React from 'react';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {PropsWithChildren} from 'react';

const theme = createTheme({
  palette: {
    primary: {
      main: '#72bf44',
      contrastText: "#fff"
    },
    warning: {
      main: "#f28918",
      contrastText: "#fff"
    }
  },
});

export function GreenStripThemeProvider({children}: PropsWithChildren<{}>) {
  return <ThemeProvider theme={theme} children={children}/>;
}