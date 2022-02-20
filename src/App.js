import React, { useMemo, createContext, useState } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import { CssBaseline } from '@mui/material'

import Layout from './components/Layout';

const handleTheme = (mode) => ({
  palette: {
    mode,
    primary: {
      ...grey,
      ...(mode === 'light' && {
        main: '#fff',
      }),
      ...(mode === 'dark' && {
        main: '#61F8D5',
      })
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
          grey: '#8892b0'
        }
        : {
          primary: '#fff',
          secondary: '#61F8D5',
          grey: '#8892b0'
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
        <Layout />
      </ThemeModeContext.Provider>
    </ThemeProvider>

  );
}

export default App;
