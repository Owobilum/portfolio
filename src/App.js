import React, { useMemo, createContext, useState } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import { Paper, CssBaseline } from '@mui/material'

import Home from './pages/Home';

const handleTheme = (mode) => ({
  palette: {
    mode,
    primary: {
      ...grey,
      ...(mode === 'light' && {
        main: '#fff',
      }),
    },
    ...(mode === 'dark' && {
      background: {
        default: '#0A192F',
        paper: '#0A192F'
      },
    }),
    text: {
      ...(mode === 'light'
        ? {
          primary: grey[900],
          secondary: 'blue',
        }
        : {
          primary: '#fff',
          secondary: '#61F8D5'
        }),
    },
  },
  typography: {
    fontFamily: ['Recursive', 'sans-serif'].join(',')
  }
});

export const ThemeModeContext = createContext('darkModeTheme')

function App() {
  const [themeMode, setThemeMode] = useState('dark')

  const darkModeTheme = useMemo(() => createTheme(handleTheme(themeMode)), [themeMode])

  return (
    <ThemeProvider theme={darkModeTheme}>
      <CssBaseline />
      <ThemeModeContext.Provider value={{ themeMode, setThemeMode }}>
        <Paper>
          <Home />
        </Paper>
      </ThemeModeContext.Provider>
    </ThemeProvider>

  );
}

export default App;
