import { useState } from "react";
import {
  Alert, Box, Button, Container, Grid, Stack, TextField, Typography,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PlaceIcon from "@mui/icons-material/Place";
import PhoneIcon from "@mui/icons-material/Phone";

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const info = [
  { icon: <PlaceIcon color="primary" />, title: "Studio", text: "221 Mixer Street, Baku" },
  { icon: <EmailIcon color="primary" />, title: "Email", text: "hello@mixology.app" },
  { icon: <PhoneIcon color="primary" />, title: "Phone", text: "+994 12 345 67 89" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const change = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
    setSent(false);
  };

  const submit = (e) => {
    e.preventDefault();
    const next = {};
    if (form.name.trim().length < 2) next.name = "Please enter your name.";
    if (!emailRe.test(form.email)) next.email = "Enter a valid email.";
    if (form.message.trim().length < 5) next.message = "Tell us a bit more.";
    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSent(true);
      setForm({ name: "", email: "", message: "" });
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 5, md: 7 }, minHeight: "60vh" }}>
      <Typography variant="h3" sx={{ fontSize: { xs: "2rem", md: "2.6rem" }, mb: 1 }}>
        Get in touch
      </Typography>
      <Typography color="text.secondary" sx={{ mb: 4 }}>
        Questions, a cocktail request, or just want to say hi? Drop us a line.
      </Typography>

      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 5 }}>
          <Stack spacing={2}>
            {info.map((i) => (
              <Stack key={i.title} direction="row" spacing={2} alignItems="center"
                sx={{ p: 2, border: "1px solid rgba(224,164,94,.18)", borderRadius: 3, bgcolor: "background.paper" }}>
                {i.icon}
                <Box>
                  <Typography variant="subtitle2" color="text.secondary">{i.title}</Typography>
                  <Typography>{i.text}</Typography>
                </Box>
              </Stack>
            ))}
          </Stack>
        </Grid>

        <Grid size={{ xs: 12, md: 7 }}>
          <Box component="form" onSubmit={submit} noValidate
            sx={{ p: 3, border: "1px solid rgba(224,164,94,.18)", borderRadius: 3, bgcolor: "background.paper" }}>
            <Stack spacing={2.5}>
              <TextField label="Your name" name="name" value={form.name} onChange={change}
                error={!!errors.name} helperText={errors.name} fullWidth />
              <TextField label="Your email" name="email" value={form.email} onChange={change}
                error={!!errors.email} helperText={errors.email} fullWidth />
              <TextField label="Your message" name="message" value={form.message} onChange={change}
                error={!!errors.message} helperText={errors.message} fullWidth multiline rows={4} />
              <Button type="submit" variant="contained" color="primary" size="large">Send message</Button>
              {sent && <Alert severity="success">Thanks! Your message has been sent (demo).</Alert>}
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
