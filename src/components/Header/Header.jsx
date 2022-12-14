import icon from '../../assets/images/icons.svg' 

import { Logo } from "components/Logo/Logo"
import { Navigation } from "components/Navigation/Navigation"
import { useState } from 'react'
import { useEffect } from 'react'
import { Container, IconBtn } from './Header.styled'
import { UserNav } from 'components/UserNav/UserNav'
import { AuthNav } from 'components/AuthNav/AuthNav'
import { Nav } from 'components/Nav/Nav'

export const Header = ({toggleMenu, isMenuOpen}) => {

    return ( <div style ={{position: "relative"}}>
        <Container >
        <Logo/>
        <Navigation>
            <Nav/>
            <UserNav/>
            <AuthNav/>
        </Navigation>
        
        {/* <IconBtn  onClick={toggleMenu}>
                <use href={icon + (isMenuOpen ? `#closeModal-button-mobile` : `#burger-menu-mobile`)}></use>
                
        </IconBtn> */}
        </Container>
    </div>)
}