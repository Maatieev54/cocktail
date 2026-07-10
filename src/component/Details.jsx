import { useContext, useEffect, useState } from "react"
import { Button, Card, CardActions, CardContent, CardMedia, List, ListItemText, Typography } from "@mui/material"
import { DrawerContext } from "./Main";
import { useNavigate, useParams } from "react-router";
import { detailsById } from "../provider/cocktailProvider";

function Details() {
    const {open, setOpen} = useContext(DrawerContext)
    const [cockt, setCockt] = useState({})
    const natigate = useNavigate()
    const {id} = useParams()
    const {name, cat, alc, glass, img, video, desc, ingr, measure } = cockt
    
    useEffect( () => { detailsById(id).then(data => setCockt(data) ) }, [id] )

    return (
        <Card sx={{ maxWidth: '50vh', overflow: 'auto' }}>
            <CardMedia image={img} alt={name} component="img" height="400" />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">{name}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>{desc}</Typography>
                <Typography gutterBottom component="div">Glass: {cockt.glass}</Typography>
                <Typography gutterBottom variant="body2" sx={{ color: 'text.secondary' }}>Instructions: {desc}</Typography>
                <Typography variant="body2">Ingredients: </Typography>
                <List>
                    {ingr?.map( (item, i) => (<li key={i}>
                        <ListItemText>▹ {item} ( {measure[i]} )  </ListItemText>
                    </li>) )}
                </List>
            </CardContent>
            <CardActions onClick={() => {setOpen(false); natigate('/main') }} >
                <Button>Close</Button>
            </CardActions>
        </Card>
    )
}

export default Details