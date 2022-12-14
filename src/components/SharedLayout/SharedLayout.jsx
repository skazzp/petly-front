import { Outlet } from "react-router-dom";
import { Header } from "components/Header/Header";
import { GlobalContainer } from "./SharedLayout.styled";

export const SharedLayout = () => {
    return (<GlobalContainer >
        <Header/>
        <Outlet/>
    </GlobalContainer>)
}

// import { useState } from 'react'
// import { ModalNav } from "components/ModalNav/ModalNav"


// export const SharedLayout = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen)
//     }
//     const closeMenu = () => setIsMenuOpen(false)

//     return (<div>
//         <Header toggleMenu={toggleMenu} isMenuOpen={isMenuOpen}/>
//         {isMenuOpen && <ModalNav toggleMenu={toggleMenu} isMenuOpen={isMenuOpen}/>}
//         <Outlet/>
//       </div>
//     )
// }


