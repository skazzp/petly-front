
import { Logo } from "components/Logo"
import {Navigation} from "components/Navigation"
import { useState, useRef, useEffect } from "react"
import { Container} from './Header.styled'


export const Header = () => {
    const header = useRef(0);
    const [height, setHeight] = useState(null);
    useEffect(() => {
        if(header) {
            setHeight(header.current.clientHeight)
        }
    
    },[height])
    return(<Container ref={header}>
        <Logo/>
        <Navigation header={height}/>
    </Container>)
}

