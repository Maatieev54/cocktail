import { useState } from "react";
import {
  AppBar, Badge, Box, Container, IconButton, Menu, MenuItem, Toolbar, Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { NavLink } from "react-router";
import { useFavorites } from "../provider/favorites";

const pages = [
  { label: "Home", to: "/" },
  { label: "Favorites", to: "/favorites" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [anchor, setAnchor] = useState(null);
  const { favorites } = useFavorites();

  const linkSx = ({ isActive }) => ({
    color: isActive ? "#E0A45E" : "#F5EFE7",
    textDecoration: "none",
    fontWeight: 600,
    padding: "6px 4px",
  });

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{ bgcolor: "rgba(18,16,14,.85)", backdropFilter: "blur(10px)", borderBottom: "1px solid rgba(224,164,94,.15)" }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ gap: 2 }}>
          <Box component={NavLink} to="/" sx={{ display: "flex", alignItems: "center", gap: 1, textDecoration: "none", color: "inherit" }}>
            <Box component="img" src="/assets/img/logo.svg" alt="MIXOLOGY" sx={{ width: 36, height: 36 }} />
            <Typography sx={{ fontFamily: '"Playfair Display", serif', fontWeight: 800, letterSpacing: 1, fontSize: "1.35rem", color: "#F5EFE7" }}>
              MIXO<span style={{ color: "#E0A45E" }}>LOGY</span>
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 1 }} />

          {/* desktop links */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3, alignItems: "center" }}>
            {pages.map((p) => (
              <NavLink key={p.to} to={p.to} style={linkSx} end={p.to === "/"}>
                {p.label === "Favorites" ? (
                  <Badge badgeContent={favorites.length} color="secondary">
                    <span>Favorites</span>
                  </Badge>
                ) : p.label}
              </NavLink>
            ))}
          </Box>

          {/* mobile */}
          <Box sx={{ display: { xs: "flex", md: "none" }, alignItems: "center" }}>
            <NavLink to="/favorites">
              <IconButton color="inherit"><Badge badgeContent={favorites.length} color="secondary"><FavoriteIcon sx={{ color: "#E0A45E" }} /></Badge></IconButton>
            </NavLink>
            <IconButton color="inherit" onClick={(e) => setAnchor(e.currentTarget)}>
              <MenuIcon />
            </IconButton>
            <Menu anchorEl={anchor} open={Boolean(anchor)} onClose={() => setAnchor(null)}>
              {pages.map((p) => (
                <MenuItem key={p.to} onClick={() => setAnchor(null)} component={NavLink} to={p.to}>
                  {p.label}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
