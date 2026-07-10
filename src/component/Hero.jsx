import { useEffect, useState, useCallback } from "react";
import { Box, Button, Chip, CircularProgress, Container, Stack, Typography } from "@mui/material";
import CasinoIcon from "@mui/icons-material/Casino";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import { randomCocktail } from "../provider/cocktailProvider";

export default function Hero({ onOpen }) {
  const [cockt, setCockt] = useState(null);
  const [loading, setLoading] = useState(true);

  const shake = useCallback(() => {
    setLoading(true);
    randomCocktail()
      .then(setCockt)
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => { shake(); }, [shake]);

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: { xs: "auto", md: 540 },
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        borderBottom: "1px solid rgba(224,164,94,.15)",
      }}
    >
      {/* blurred backdrop */}
      {cockt?.img && (
        <Box sx={{
          position: "absolute", inset: 0,
          backgroundImage: `url(${cockt.img})`, backgroundSize: "cover", backgroundPosition: "center",
          filter: "blur(40px) brightness(.4)", transform: "scale(1.2)",
        }} />
      )}
      <Box sx={{ position: "absolute", inset: 0, background: "linear-gradient(120deg, rgba(18,16,14,.96) 30%, rgba(18,16,14,.6))" }} />

      <Container maxWidth="lg" sx={{ position: "relative", py: { xs: 5, md: 6 } }}>
        <Stack direction={{ xs: "column-reverse", md: "row" }} spacing={4} alignItems="center">
          <Box sx={{ flex: 1 }}>
            <Chip icon={<LocalBarIcon />} label="Cocktail of the moment" color="primary" variant="outlined" sx={{ mb: 2 }} />
            {loading ? (
              <Box sx={{ py: 6 }}><CircularProgress color="primary" /></Box>
            ) : (
              <>
                <Typography variant="h2" sx={{ fontSize: { xs: "2.4rem", md: "3.6rem" }, lineHeight: 1.05 }}>
                  {cockt?.name}
                </Typography>
                <Stack direction="row" spacing={1} sx={{ my: 2, flexWrap: "wrap", gap: 1 }}>
                  {cockt?.cat && <Chip size="small" label={cockt.cat} sx={{ bgcolor: "rgba(224,164,94,.12)" }} />}
                  {cockt?.alc && <Chip size="small" label={cockt.alc} color="secondary" variant="outlined" />}
                  {cockt?.glass && <Chip size="small" label={cockt.glass} variant="outlined" />}
                </Stack>
                <Typography color="text.secondary" sx={{ maxWidth: 520, lineHeight: 1.7,
                  display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                  {cockt?.desc}
                </Typography>
                <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
                  <Button variant="contained" color="primary" size="large" onClick={() => onOpen(cockt.id)}>
                    View recipe
                  </Button>
                  <Button variant="outlined" color="primary" size="large" startIcon={<CasinoIcon />} onClick={shake}>
                    Shake again
                  </Button>
                </Stack>
              </>
            )}
          </Box>

          {cockt?.img && (
            <Box sx={{ flexShrink: 0 }}>
              <Box
                component="img"
                src={cockt.img}
                alt={cockt.name}
                sx={{
                  width: { xs: 220, md: 320 }, height: { xs: 220, md: 320 },
                  borderRadius: "50%", objectFit: "cover",
                  border: "4px solid rgba(224,164,94,.5)",
                  boxShadow: "0 24px 60px -20px rgba(0,0,0,.9)",
                  animation: "floaty 5s ease-in-out infinite",
                }}
              />
            </Box>
          )}
        </Stack>
      </Container>
    </Box>
  );
}
