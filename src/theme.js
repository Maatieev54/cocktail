import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#E0A45E", contrastText: "#1A1512" },
    secondary: { main: "#C64B6E" },
    background: { default: "#12100E", paper: "#1E1916" },
    text: { primary: "#F5EFE7", secondary: "#B8AEA3" },
  },
  typography: {
    fontFamily: '"Inter", system-ui, sans-serif',
    h1: { fontFamily: '"Playfair Display", serif', fontWeight: 800 },
    h2: { fontFamily: '"Playfair Display", serif', fontWeight: 700 },
    h3: { fontFamily: '"Playfair Display", serif', fontWeight: 700 },
    h4: { fontFamily: '"Playfair Display", serif', fontWeight: 700 },
    h5: { fontFamily: '"Playfair Display", serif', fontWeight: 600 },
    button: { textTransform: "none", fontWeight: 600 },
  },
  shape: { borderRadius: 14 },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#1E1916",
          border: "1px solid rgba(224,164,94,0.14)",
          backgroundImage: "none",
        },
      },
    },
    MuiButton: {
      styleOverrides: { root: { borderRadius: 999 } },
    },
  },
});

export default theme;
