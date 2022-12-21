import { Logo } from "components/Logo"
import {Navigation} from "components/Navigation"
import { useState } from "react"
import { useEffect } from "react"
import { useRef } from "react"
import { Container} from './Header.styled'


export const Header = () => {
    // const header = useRef(0);
    // const [height, setHeight] = useState(null);
    // useEffect(() => {
    //     if(header) {
    //         setHeight(header.current.style.height)
    //     }
    
    // },[header])
    // console.log(height)
    return(<Container >
        <Logo/>
        <Navigation />
    </Container>)
}

