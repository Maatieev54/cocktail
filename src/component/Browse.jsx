import { useEffect, useRef, useState } from "react";
import {
  Box, Chip, CircularProgress, Container, Grid, Stack, TextField, Typography, InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CocktailCard from "./CocktailCard";
import {
  searchByName, filterByCategory, listCategories,
} from "../provider/cocktailProvider";

export default function Browse({ onOpen }) {
  const [categories, setCategories] = useState([]);
  const [activeCat, setActiveCat] = useState("Cocktail");
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const debounce = useRef();

  useEffect(() => {
    listCategories().then((c) => setCategories(c.slice(0, 8)));
  }, []);

  // category browse
  useEffect(() => {
    if (query.trim()) return; // search takes over
    setLoading(true);
    filterByCategory(activeCat)
      .then((data) => setResults(data))
      .finally(() => setLoading(false));
  }, [activeCat, query]);

  // debounced search
  useEffect(() => {
    if (!query.trim()) return;
    setLoading(true);
    clearTimeout(debounce.current);
    debounce.current = setTimeout(() => {
      searchByName(query.trim())
        .then((data) => setResults(data))
        .finally(() => setLoading(false));
    }, 450);
    return () => clearTimeout(debounce.current);
  }, [query]);

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }} id="browse">
      <Typography variant="h3" sx={{ fontSize: { xs: "2rem", md: "2.6rem" }, mb: 1 }}>
        Explore the bar
      </Typography>
      <Typography color="text.secondary" sx={{ mb: 3 }}>
        Search by name or pick a category — then tap a glass for the full recipe.
      </Typography>

      <TextField
        fullWidth
        placeholder="Search cocktails… (e.g. Margarita, Mojito)"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        sx={{ mb: 3, maxWidth: 520 }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start"><SearchIcon color="primary" /></InputAdornment>
          ),
        }}
      />

      {!query.trim() && (
        <Stack direction="row" spacing={1} sx={{ mb: 4, flexWrap: "wrap", gap: 1 }}>
          {categories.map((cat) => (
            <Chip
              key={cat}
              label={cat}
              clickable
              color={activeCat === cat ? "primary" : "default"}
              variant={activeCat === cat ? "filled" : "outlined"}
              onClick={() => setActiveCat(cat)}
            />
          ))}
        </Stack>
      )}

      {loading ? (
        <Box sx={{ display: "grid", placeItems: "center", minHeight: 240 }}>
          <CircularProgress color="primary" />
        </Box>
      ) : results.length === 0 ? (
        <Typography color="text.secondary" sx={{ py: 6, textAlign: "center" }}>
          No cocktails found. Try another search 🍹
        </Typography>
      ) : (
        <Grid container spacing={{ xs: 2, md: 3 }}>
          {results.map((cockt) => (
            <Grid key={cockt.id} size={{ xs: 6, sm: 4, md: 3 }}>
              <CocktailCard cockt={cockt} onOpen={onOpen} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}
