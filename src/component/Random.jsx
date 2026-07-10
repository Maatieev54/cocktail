import { useEffect, useState } from "react"
import { Button, Card, CardActions, CardContent, CardMedia, Grid, List, ListItem, ListItemText, Typography } from "@mui/material"
import { randomCocktail } from "../provider/cocktailProvider"
import RandomSkeleton from "./RandomSkeleton"
import RandomError from "./RandomError"

function Random() {
    const [cockt, setCockt] = useState({})
    const [count, setCount] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const { id, name, cat, alc, glass, img, video, desc, ingr, measure } = cockt

    useEffect( () => { randomCocktail()
                            .then(
                                data =>  setCockt(data),
                                err => setError(true)
                            )
                            .finally( () => setLoading(false) ) }, [count] )
    
    return (
        loading ? <RandomSkeleton /> :
        error ? <RandomError /> :
        <Card>
            <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 6 }}>
                    <CardMedia sx={{ height: 400 }} image={img} title={name} />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">{name}</Typography>
                        <Typography gutterBottom variant="h6" component="div">{cat} ({alc})</Typography>
                        <Typography gutterBottom component="div">Glass: {cockt.glass}</Typography>
                        <Typography gutterBottom variant="body2" sx={{ color: 'text.secondary' }}>Instructions: {desc}</Typography>
                        <Typography variant="body2">Ingredients: </Typography>
                        <List>
                            {ingr?.map( (item, i) => (<li key={i}>
                                <ListItemText>▹ {item} ( {measure[i]} )  </ListItemText>
                            </li>) )}
                        </List>
                    </CardContent>
                    <CardActions sx={{justifyContent: 'end'}}>
                        <Button size="small" variant="outlined" color="error"
                            onClick={() => {
                                setCount(count + 1)
                                setLoading(true)
                            }}>Refresh</Button>
                    </CardActions>
                </Grid>
            </Grid>
        </Card>
    )
}

export default Random