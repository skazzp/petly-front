import { AuthNav } from "components/AuthNav/AuthNav";
import { ModalNav } from "components/ModalNav/ModalNav";
import { Nav } from "components/Nav/Nav";
import { UserNav } from "components/UserNav/UserNav";
import { useState } from "react";
import { Container, MenuIcon } from "./Navigation.styled";
import icon from '../../assets/images/icons.svg'
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
    <Container> 
        {useIsDesktop() && <><Nav/> {isLoggedIn ? <UserNav/> : <AuthNav/>}</>}
        {useIsTablet() && <>{isLoggedIn ? <UserNav/> : <AuthNav/>}<MenuIcon onClick={toggleMenu}>
                <use href={icon + `#burger-menu-mobile`}></use>
            </MenuIcon></>}
        {useIsMobile() &&<MenuIcon onClick={toggleMenu}>
                <use href={icon + `#burger-menu-mobile`}></use>
            </MenuIcon>}
        {MenuOpen && <ModalNav/>}
    </Container>)
}