import { useState } from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import { Link } from "react-router";
import CocktailCard from "../component/CocktailCard";
import DetailsModal from "../component/DetailsModal";
import { useFavorites } from "../provider/favorites";

export default function Favorites() {
  const { favorites } = useFavorites();
  const [selected, setSelected] = useState(null);

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 5, md: 7 }, minHeight: "60vh" }}>
      <Typography variant="h3" sx={{ fontSize: { xs: "2rem", md: "2.6rem" }, mb: 1 }}>
        Your Favorites
      </Typography>
      <Typography color="text.secondary" sx={{ mb: 4 }}>
        The cocktails you saved, kept right here in your browser.
      </Typography>

      {favorites.length === 0 ? (
        <Box sx={{ textAlign: "center", py: 8, color: "text.secondary" }}>
          <LocalBarIcon sx={{ fontSize: 64, color: "primary.main", opacity: 0.7 }} />
          <Typography variant="h6" sx={{ mt: 2 }}>No favorites yet</Typography>
          <Typography sx={{ mb: 3 }}>Tap the heart on any cocktail to save it here.</Typography>
          <Button component={Link} to="/" variant="contained" color="primary">Explore cocktails</Button>
        </Box>
      ) : (
        <Grid container spacing={{ xs: 2, md: 3 }}>
          {favorites.map((cockt) => (
            <Grid key={cockt.id} size={{ xs: 6, sm: 4, md: 3 }}>
              <CocktailCard cockt={cockt} onOpen={setSelected} />
            </Grid>
          ))}
        </Grid>
      )}

      <DetailsModal id={selected} open={Boolean(selected)} onClose={() => setSelected(null)} />
    </Container>
  );
}
