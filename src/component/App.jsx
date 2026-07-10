import { Outlet } from "react-router"
import Header from "./Header"
import Footer from "./Footer"
import {Box, Container} from '@mui/material'

function App() {
  return (
    <Container maxWidth="md">
      <Header />
      <Box component="main" sx={{py: 3}}>
        <Outlet />
      </Box>
      <Footer />
    </Container>
  )
}

export default App
