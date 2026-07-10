import { Box, Typography } from "@mui/material"

function Footer() {
    return (
        <Box component="footer" sx={{ background: "darkred", color: "#fff", py: 1 }}>
            <Typography align="center">
                Copyright &copy; {new Date().getFullYear()} — Mətin Fətizadə
            </Typography>
        </Box>
    )
}

export default Footer