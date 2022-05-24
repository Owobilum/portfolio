import React, { useMemo, createContext, useState, useEffect } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import { CssBaseline } from '@mui/material'

import Layout from './components/Layout';
import Loader from './components/Loader';

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
    ...(mode === 'dark' ? {
      background: {
        default: '#0A192F',
        paper: '#0A192F',
        medium: '#112240'
      },
    } : {
      background: {
        default: '#ffffff',
        paper: '#ffffff',
        medium: '#e3e3e3'
      },
    }),
    text: {
      ...(mode === 'light'
        ? {
          primary: grey[900],
          secondary: '#317c6b',
          grey: '#606060',
          icon: '#000'
        }
        : {
          primary: '#fff',
          secondary: '#61F8D5',
          grey: '#8892b0',
          icon: '#fff'
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
  const [loading, setLoading] = useState(true)

  const handleWelcome = () => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }

  useEffect(() => {
    handleWelcome()
  }, [])

  const darkModeTheme = useMemo(() => createTheme(handleTheme(themeMode)), [themeMode])

  if (loading) {
    return <Loader />
  }

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
