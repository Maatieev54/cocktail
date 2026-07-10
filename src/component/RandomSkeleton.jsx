import { Button, Card, CardActions, CardContent, CardMedia, Grid, List, ListItem, ListItemText, Skeleton, Typography } from "@mui/material"

function RandomSkeleton() {
    return (
        <Card>
            <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 6 }}>
                    <Skeleton variant="rectangular" height={400} />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <CardContent>
                        <Skeleton width="60%" height={36} />
                        <Skeleton width="80%" height={30} />
                        <Skeleton width="40%" height={28} />
                        
                        <Skeleton width="100%" height={24} />
                        <Skeleton width="100%" height={24} />
                        <Skeleton width="40%" height={24} />
                        
                        <List>
                            <li><Skeleton width="30%" height={24} /></li>
                            <li><Skeleton width="30%" height={24} /></li>
                            <li><Skeleton width="30%" height={24} /></li>
                        </List>
                    </CardContent>
                    <CardActions sx={{justifyContent: 'end'}}>
                            <Skeleton variant="rectangular" width="20%" height={40} />
                    </CardActions>
                </Grid>
            </Grid>
        </Card>
    )
}

export default RandomSkeleton