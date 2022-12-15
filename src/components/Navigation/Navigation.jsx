import { AuthNav } from "components/AuthNav/AuthNav";
import { ModalNav } from "components/ModalNav/ModalNav";
import { Nav } from "components/Nav/Nav";
import { UserNav } from "components/UserNav/UserNav";
import { useState } from "react";
import { Container, MenuIcon, CloseIcon, Box } from "./Navigation.styled";
import icon from '../../assets/images/icons.svg'
import { useMediaQuery } from 'react-responsive';
import { Logo } from "components/Logo/Logo";
import { useSelector } from "react-redux";
import { selectToken } from "redux/auth/authSelectors";
  
    // let isLoggedIn = true;


export const Navigation = () => {
    let isLoggedIn = useSelector(selectToken);
    const useIsMobile = () => useMediaQuery({ maxWidth: 767.98 });
    const useIsTablet = () => useMediaQuery({minWidth: 768, maxWidth: 1279.98 });
    const useIsDesktop = () => useMediaQuery({ minWidth: 1280 });
    const useIsMobileOrDesktop = () => useMediaQuery({ maxWidth: 1279.98})
    const isMobile = useIsMobile();
    const isTablet = useIsTablet();
    const isDesktop = useIsDesktop();
    const isMobileOrDesktop = useIsMobileOrDesktop()


    const [MenuOpen, setMenuOpen] = useState(false)
    const toggleMenu = () => setMenuOpen(!MenuOpen)

    return(
    <Container> 
        {isDesktop && <><Nav/> {isLoggedIn ? <UserNav /> : <AuthNav/>}</>}
        {isTablet && <>{isLoggedIn ? <UserNav toggleMenu={toggleMenu}/> : <AuthNav toggleMenu={toggleMenu}/>}<MenuIcon onClick={toggleMenu}>
                <use href={icon + `#burger-menu-mobile`}></use>
            </MenuIcon></>}
        {isMobile &&<MenuIcon onClick={toggleMenu}>
                <use href={icon + `#burger-menu-mobile`}></use>
            </MenuIcon>}
        {(MenuOpen && isMobileOrDesktop) &&
            <ModalNav>
                <Box>
                    <Logo/>
                    <CloseIcon onClick={toggleMenu}>
                        <use href={icon + `#closeModal-button-mobile`}></use>
                    </CloseIcon>
                </Box>
                {isMobile && <>{isLoggedIn ? <UserNav toggleMenu={toggleMenu}/> : <AuthNav toggleMenu={toggleMenu}/>}</>}
                <Nav toggleMenu={toggleMenu}/>
            </ModalNav>}
    </Container>)
}