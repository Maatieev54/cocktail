import { Outlet } from "react-router";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "../theme";
import { FavoritesProvider } from "../provider/favorites";
import Navbar from "./Navbar";
import Footer from "./Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <FavoritesProvider>
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </FavoritesProvider>
    </ThemeProvider>
  );
}

export default App;
