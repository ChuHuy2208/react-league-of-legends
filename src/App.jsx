import Box from "@mui/material/Box"
import HeaderRoute from "~/routes/HeaderRoute"
import Header from "./components/Header"
function App() {

  return (
    <Box sx={{ width: '100vw', height: '100vh', bgcolor: 'rgb(22, 31, 50)' }}>
      <Header />
      <Box sx={{ maxWidth: '1920px', width: '100%', margin: '0 auto' }}>
        {/* Routes */}
        <HeaderRoute />
      </Box>
      <Box sx={{  }}>
        Footer
      </Box>
    </Box>
  )
}

export default App
