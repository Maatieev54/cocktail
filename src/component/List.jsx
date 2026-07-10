import { useEffect, useState } from "react"
import { Grid, Pagination, PaginationItem, Stack, Typography } from "@mui/material"
import Cocktail from "./Cocktail"
import { byFirstLetter } from "../provider/cocktailProvider"

function List() {
    const [data, setData] = useState([])
    const [letter, setLetter] = useState('a')
    const [error, setError] = useState(false)
    const abc = ' ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    useEffect( () => { byFirstLetter(letter).then(
        data => {
            if (data) {
                setError(false)
                setData(data) 
            } else setError(true)
        }
    ) }, [letter] )
    
    return (
        <>
            <Pagination onChange={(_, val) => setLetter(abc[val]) } count={26} boundaryCount={13} hidePrevButton={true} hideNextButton={true}  sx={{pt:'20px'}}
                renderItem={(item) => (
                    <PaginationItem {...item} page={item.page ? abc[item.page] : undefine} />
                )}
            />
            {error ? <Typography variant="h5">There are no cocktail started by letter {letter}</Typography> :
            <Grid container spacing={{ xs: 2, md: 3 }} sx={{py: 3}}>
                {data.map((cockt, i) => (
                    <Grid key={i} size={{ xs: 12, sm: 6, md: 4 }}>
                        <Cocktail cockt={cockt} />
                    </Grid>
                ))}
            </Grid>
            }
        </>
        
    )
}

export default List