import { Box, Card, CardMedia, Chip, IconButton, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useFavorites } from "../provider/favorites";

export default function CocktailCard({ cockt, onOpen }) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const fav = isFavorite(cockt.id);

  return (
    <Card
      onClick={() => onOpen(cockt.id)}
      sx={{
        cursor: "pointer",
        overflow: "hidden",
        position: "relative",
        transition: "transform .3s ease, box-shadow .3s ease, border-color .3s ease",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 18px 40px -18px rgba(0,0,0,.8)",
          borderColor: "primary.main",
        },
        "&:hover .cocktail-img": { transform: "scale(1.08)" },
      }}
    >
      <Box sx={{ position: "relative", height: 220, overflow: "hidden" }}>
        <CardMedia
          className="cocktail-img"
          component="img"
          image={cockt.img}
          alt={cockt.name}
          sx={{ height: "100%", objectFit: "cover", transition: "transform .5s ease" }}
        />
        <Box sx={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 45%, rgba(18,16,14,.92))" }} />
        <IconButton
          onClick={(e) => { e.stopPropagation(); toggleFavorite(cockt); }}
          sx={{
            position: "absolute", top: 8, right: 8,
            bgcolor: "rgba(0,0,0,.4)", color: fav ? "secondary.main" : "#fff",
            "&:hover": { bgcolor: "rgba(0,0,0,.6)" },
          }}
          aria-label="favorite"
        >
          {fav ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </IconButton>
        <Box sx={{ position: "absolute", left: 14, right: 14, bottom: 12 }}>
          <Typography variant="h6" sx={{ fontFamily: '"Playfair Display", serif', lineHeight: 1.15 }}>
            {cockt.name}
          </Typography>
          {(cockt.cat || cockt.alc) && (
            <Chip
              size="small"
              label={cockt.alc || cockt.cat}
              color="primary"
              variant="outlined"
              sx={{ mt: 1, bgcolor: "rgba(224,164,94,.08)" }}
            />
          )}
        </Box>
      </Box>
    </Card>
  );
}
