import { Box, Container, Stack, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box component="footer" sx={{ borderTop: "1px solid rgba(224,164,94,.15)", mt: 6, py: 4, bgcolor: "background.paper" }}>
      <Container maxWidth="lg">
        <Stack direction={{ xs: "column", sm: "row" }} justifyContent="space-between" alignItems="center" spacing={1}>
          <Typography sx={{ fontFamily: '"Playfair Display", serif', fontWeight: 700 }}>
            MIXO<span style={{ color: "#E0A45E" }}>LOGY</span>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Recipes from TheCocktailDB · Please drink responsibly
          </Typography>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} — Mətin Fətizadə
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
