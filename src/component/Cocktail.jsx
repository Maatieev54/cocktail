import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material"
import { useContext } from "react"
import { DrawerContext } from "./Main"
import { Link } from "react-router"

function Cocktail({cockt}) {
    const {open, setOpen} = useContext(DrawerContext)
    const { id, name, cat, alc, glass, img, video, desc, ingr, measure } = cockt
    return (
        <Card>
            <CardActionArea onClick={ () => setOpen(true) }>
                <Link to={'/cocktail/' + id}>
                    <CardMedia image={img} alt={name} component="img" height="260" />
                    <CardContent sx={{minHeight: '100px'}}>
                        <Typography gutterBottom variant="h5" component="div">{name}</Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {desc.slice(0, 85)} {desc.length > 85 ? '(...)' : ''}
                        </Typography>
                    </CardContent>
                </Link>
            </CardActionArea>
        </Card>
    )
}

export default Cocktail