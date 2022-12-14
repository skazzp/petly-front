import icon from '../../assets/images/icons.svg' 

import { Logo } from "components/Logo/Logo"
import { Navigation } from "components/Navigation/Navigation"
import { useState } from 'react'
import { useEffect } from 'react'
export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
        console.log(isMenuOpen)
    }
    const closeMenu = () => setIsMenuOpen(false)
    // useEffect(() =>{

    // }, [isMenuOpen])
    return ( <div>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: "center"}}>
        <Logo/>
            <svg style={{width: '30px', height: '20px'}} onClick={toggleMenu}>
                <use href={icon + (isMenuOpen ? `#icon-close` : `#icon-menu`)}></use>
                
            </svg>
        </div>
    {isMenuOpen && <Navigation toggleMenu={toggleMenu}/>}
    </div>)
}