import { Box, Button, Container, Typography } from "@mui/material";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import { Link } from "react-router";

export default function Error() {
  return (
    <Container maxWidth="sm" sx={{ py: 12, textAlign: "center" }}>
      <LocalBarIcon sx={{ fontSize: 72, color: "primary.main" }} />
      <Typography variant="h2" sx={{ mt: 2 }}>404</Typography>
      <Typography color="text.secondary" sx={{ mb: 4 }}>
        This glass is empty — the page you’re looking for doesn’t exist.
      </Typography>
      <Button component={Link} to="/" variant="contained" color="primary" size="large">
        Back to the bar
      </Button>
    </Container>
  );
}
