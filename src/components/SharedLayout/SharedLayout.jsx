import { Header } from "components/Header/Header"
import { ModalNav } from "components/ModalNav/ModalNav"
import { Outlet } from "react-router-dom"
import { useState } from 'react'

export const SharedLayout = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    const closeMenu = () => setIsMenuOpen(false)

    return (<div>
        <Header toggleMenu={toggleMenu} isMenuOpen={isMenuOpen}/>
        {isMenuOpen && <ModalNav toggleMenu={toggleMenu} isMenuOpen={isMenuOpen}/>}
        <Outlet/>
      </div>
    )
}