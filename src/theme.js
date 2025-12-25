import { createTheme } from "@mui/material"

const theme = createTheme({
  components: {
    MuiInput: {
      styleOverrides: {
        input: {
          color: 'white'
        }
      }
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          '*::-webkit-scrollbar': {
            width: '6px',
            height: '6px'
          },
          '*::-webkit-scrollbar-thumb': {
            backgroundColor: '#dcdde1',
            borderRadius: '10px'
          },
          '*::-webkit-scrollbar-thumb:hover': {
            backgroundColor: 'white',
          },
        }
      }
    }
  }
})

export default theme
