import { useState } from 'react'
import './App.css'
import { JaaButton, JaaTable } from 'jaa-my-component-library';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { Divider, TableBody, TableCell, TableContainer, TableHead, TableRow, Switch } from '@mui/material'
import Table from '@mui/material/Table';
import Paper from '@mui/material/Paper';

function App() {
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

        dark<Switch onChange={() => setMode(!mode)}></Switch> light
      </div>
      Using a table from the 3rd party library doesn't propagate the theme:
      <JaaTable></JaaTable>
      <Divider sx={{my:4}} />
      Using a Mui Table directly in this App gets the theme applied: 
      <TableContainer component={Paper}>
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
