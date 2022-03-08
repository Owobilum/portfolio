import React, { useMemo, createContext, useState, useEffect } from 'react'
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

const wordStore = ['W', 'E', 'L', 'C', 'O', 'M', 'E', `${String.fromCodePoint(0x1F600)}`]
const keyDelay = 500
function App() {
  const [themeMode, setThemeMode] = useState('dark')
  const [loading, setLoading] = useState(true)
  const [displayedWord, setDisplayedWord] = React.useState('')

  const handleWelcome = () => {
    setTimeout(() => {
      setLoading(false)
    }, (wordStore.length * keyDelay) + 1000)
    for (let i = 0; i < wordStore.length; i++) {
      setTimeout(() => {
        setDisplayedWord(prev => prev + wordStore[i])
      }, ((i + 1) * keyDelay))
    }
  }

  useEffect(() => {
    handleWelcome()
  }, [])

  const darkModeTheme = useMemo(() => createTheme(handleTheme(themeMode)), [themeMode])

  if (loading) {
    return (
      <div
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#0A192F',
          color: '#61F8D5',
          fontSize: 40,
          fontFamily: "cursive"
        }}
      >
        <p>{displayedWord}</p>
      </div>
    )
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
