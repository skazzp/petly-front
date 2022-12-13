import icon from '../../assets/images/icons.svg' 
import { Logo } from "components/Logo/Logo"
import { Navigation } from "components/Navigation/Navigation"
import { useState } from 'react'
export const Header = () => {
    const [openMenu, setOpenMenu] = useState(false)
    return ( <div style={{display: 'flex', justifyContent: 'space-between', alignItems: "center"}}>
    <Logo/>
    <svg style={{width: '30px', height: '20px'}} onClick={() => {
        setOpenMenu(!openMenu)
        console.log(openMenu)
        }}>
        <use href={icon + (openMenu ? `#icon-close` : `#icon-menu`)}></use>
        
    </svg>
    <Navigation/>
    </div>)
}