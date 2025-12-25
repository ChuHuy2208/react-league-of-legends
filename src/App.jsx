import Box from "@mui/material/Box"
import HeaderRoute from "~/routes/HeaderRoute"
import Header from "./components/Header"
function App() {

  return (
    <Box sx={{ width: '100vw', height: '100vh', overflowX: 'hidden' }}>
      <Header />
      <Box sx={{}}>
        {/* Routes */}
        <HeaderRoute />
      </Box>
      <Box sx={{}}>
        Footer
      </Box>
    </Box>
  )
}

export default App
