import { useEffect, useState } from "react";
import {
  Box, Chip, CircularProgress, Dialog, Divider, IconButton, Stack, Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import { detailsById } from "../provider/cocktailProvider";
import { useFavorites } from "../provider/favorites";

export default function DetailsModal({ id, open, onClose }) {
  const [cockt, setCockt] = useState(null);
  const [loading, setLoading] = useState(false);
  const { isFavorite, toggleFavorite } = useFavorites();

  useEffect(() => {
    if (!id || !open) return;
    setLoading(true);
    detailsById(id)
      .then(setCockt)
      .finally(() => setLoading(false));
  }, [id, open]);

  const fav = cockt ? isFavorite(cockt.id) : false;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth
      PaperProps={{ sx: { borderRadius: 4, overflow: "hidden", bgcolor: "background.paper" } }}>
      {loading || !cockt ? (
        <Box sx={{ display: "grid", placeItems: "center", minHeight: 300 }}>
          <CircularProgress color="primary" />
        </Box>
      ) : (
        <Box sx={{ display: { xs: "block", md: "flex" } }}>
          <Box sx={{ position: "relative", flex: "0 0 42%" }}>
            <Box component="img" src={cockt.img} alt={cockt.name}
              sx={{ width: "100%", height: { xs: 240, md: "100%" }, objectFit: "cover", display: "block" }} />
            <Box sx={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 60%, rgba(0,0,0,.55))" }} />
          </Box>

          <Box sx={{ flex: 1, p: 3, position: "relative", maxHeight: { md: "80vh" }, overflowY: "auto" }}>
            <IconButton onClick={onClose} sx={{ position: "absolute", top: 8, right: 8 }}>
              <CloseIcon />
            </IconButton>

            <Typography variant="h4" sx={{ pr: 4 }}>{cockt.name}</Typography>
            <Stack direction="row" spacing={1} sx={{ mt: 1.5, flexWrap: "wrap", gap: 1 }}>
              {cockt.cat && <Chip size="small" label={cockt.cat} color="primary" variant="outlined" />}
              {cockt.alc && <Chip size="small" label={cockt.alc} color="secondary" variant="outlined" />}
              {cockt.glass && <Chip size="small" icon={<LocalBarIcon />} label={cockt.glass} />}
            </Stack>

            <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: 2, cursor: "pointer", color: fav ? "secondary.main" : "text.secondary" }}
              onClick={() => toggleFavorite(cockt)}>
              {fav ? <FavoriteIcon /> : <FavoriteBorderIcon />}
              <Typography variant="body2">{fav ? "Saved to favorites" : "Save to favorites"}</Typography>
            </Stack>

            <Divider sx={{ my: 2 }} />
            <Typography variant="h6" gutterBottom>Ingredients</Typography>
            <Box component="ul" sx={{ pl: 2, m: 0 }}>
              {cockt.ingr?.map((item, i) => (
                <Typography key={i} component="li" variant="body2" sx={{ mb: 0.5 }}>
                  <b style={{ color: "#E0A45E" }}>{item}</b>
                  {cockt.measure[i] ? ` — ${cockt.measure[i]}` : ""}
                </Typography>
              ))}
            </Box>

            <Divider sx={{ my: 2 }} />
            <Typography variant="h6" gutterBottom>Instructions</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
              {cockt.desc}
            </Typography>
          </Box>
        </Box>
      )}
    </Dialog>
  );
}
