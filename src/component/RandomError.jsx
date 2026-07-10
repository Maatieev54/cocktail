import {  Card, CardContent, CardMedia, Grid, Typography } from "@mui/material"

function RandomError() {
    return (
        <Card>
            <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 6 }}>
                    <CardMedia sx={{ height: 400 }} image='./assets/img/404.jpg' title='Error' />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">Error 404</Typography>
                        <Typography gutterBottom variant="h6" component="div">Content can't loaded...</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </Card>
    )
}

export default RandomError