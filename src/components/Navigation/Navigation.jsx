import { AuthNav } from "components/AuthNav/AuthNav";
import { ModalNav } from "components/ModalNav/ModalNav";
import { Nav } from "components/Nav/Nav";
import { UserNav } from "components/UserNav/UserNav";
import { useState } from "react";
import { Container } from "./Navigation.styled";

import { useMediaQuery } from 'react-responsive';




// import { useSelector } from "react-redux";
// import { selectToken } from "redux/auth/authSelectors";
// export const Navigation = ({toggleMenu}) => {
//     let isLoggedIn = useSelector(selectToken);
    let isLoggedIn = true;

//     return(<Container>
//         <Nav toggleMenu={toggleMenu}/>
//         {isLoggedIn ? <UserNav toggleMenu={toggleMenu}/> :  <AuthNav toggleMenu={toggleMenu}/>}
//     </Container>
//     )
// } 
// let isDesktop = true;
// let isTablet = false;
// let isMobile = false;


export const Navigation = () => {
    const useIsMobile = () => useMediaQuery({ maxWidth: 767.98 });
    const useIsTablet = () => useMediaQuery({minWidth: 768, maxWidth: 1279.98 });
    const useIsDesktop = () => useMediaQuery({ minWidth: 1280 });

    const [MenuOpen, setMenuOpen] = useState(false)
    const toggleMenu = () => setMenuOpen(!MenuOpen)

    return(
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%'}}> 
        {useIsDesktop() && <><Nav/> {isLoggedIn ? <AuthNav/> : <UserNav/>}</>}
        {useIsTablet() && <>{isLoggedIn ? <AuthNav/> : <UserNav/>}<h3 onClick={toggleMenu}>SVG</h3></>}
        {useIsMobile() &&<h3 onClick={toggleMenu}>SVG</h3>}
        {MenuOpen && <ModalNav/>}
    </div>)
}