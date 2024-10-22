import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { JaaButton, JaaTable } from 'jaa-my-component-library';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { Divider, TableBody, TableCell, TableContainer, TableHead, TableRow, Switch } from '@mui/material'
import Table from '@mui/material/Table';

function App() {
  const [count, setCount] = useState(0)
  const [mode, setMode] = useState(true)

  const darktheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#37a169'
      },
      secondary: {
        main: '#FFA726'
      }
    },
    components: {
      MuiTableRow: {
        styleOverrides: {
          head: {
            backgroundColor: '#FFA726'
          }
        }
      }
    }
  })

  const lighttheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: 'rgb(255,0,0)'
      },
      secondary: {
        main: 'rgb(0,255,0)'
      }
    },
    components: {
      MuiTableRow: {
        styleOverrides: {
          head: {
            backgroundColor: '#00d51a'
          },
          root: {
            backgroundColor: '#fcdbff',
          }
        }
      }
    }
  })

  return (
    <>
    <ThemeProvider theme={mode ? darktheme : lighttheme}>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        dark<Switch onChange={() => setMode(!mode)}></Switch> light
      </div>
      Using a table from the 3rd party library doesn't propagate the theme:
      <JaaTable></JaaTable>
      <Divider sx={{my:4}} />
      Using a Mui Table directly in this App gets the theme applied: 
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Thing</TableCell> 
              <TableCell>Stuff</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow> 
              <TableCell> a thing </TableCell> 
              <TableCell> some stuff  </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      </ThemeProvider>
    </>
  )
}

export default App
