import icon from '../../assets/images/icons.svg' 

import { Logo } from "components/Logo/Logo"
import { Navigation } from "components/Navigation/Navigation"
import { useState } from 'react'
import { useEffect } from 'react'
import { Container, IconBtn } from './Header.styled'
export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    const closeMenu = () => setIsMenuOpen(false)

    return ( <div>
        <Container >
        <Logo/>
            <IconBtn  onClick={toggleMenu}>
                <use href={icon + (isMenuOpen ? `#icon-close` : `#icon-menu`)}></use>
                
            </IconBtn>
        </Container>
    {isMenuOpen && <Navigation toggleMenu={toggleMenu} onClick={toggleMenu}/>}
    </div>)
}