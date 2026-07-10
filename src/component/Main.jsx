import { createContext, useState } from 'react'
import { useNavigate } from 'react-router'
import { Drawer } from "@mui/material"
import List from "./List"
import Random from "./Random"
import Details from './Details';

export const DrawerContext = createContext()

function Main() {
    const [open, setOpen] = useState(false)
    const natigate = useNavigate()

    return (
        <DrawerContext value={{open, setOpen}} >
            <Random />
            <List />
            <Drawer open={open} onClose={() => {setOpen(!open); natigate('/main') }} aria-hidden={!open}>
                <Details />
            </Drawer>
        </DrawerContext>
    )
}

export default Main