import { useState } from "react";
import { useSelector } from "react-redux";
import { selectToken } from "redux/auth/authSelectors";
import {useIsDesktop, useIsMobile, useIsMobileOrTablet, useIsTablet} from '../../hooks/mediaQuery'
import { AuthNav } from "components/AuthNav";
import { ModalNav } from "components/ModalNav";
import { Nav } from "components/Nav";
import { UserNav } from "components/UserNav";
import { Logo } from "components/Logo";
import { IconButton } from "components/IconButton";
import { Container, Box } from "./Navigation.styled";


export const Navigation = () => {
    let isLoggedIn = useSelector(selectToken);
    // isLoggedIn = true;
    const isMobile = useIsMobile();
    const isTablet = useIsTablet();
    const isDesktop = useIsDesktop();
    const isMobileOrTablet = useIsMobileOrTablet()

    const [MenuOpen, setMenuOpen] = useState(false)
    const toggleMenu = () => setMenuOpen(!MenuOpen)

    return(
    <Container> 
        {isDesktop && <><Nav/>{isLoggedIn ? <UserNav /> : <AuthNav/>}</>}
        {isTablet && <>{isLoggedIn ? <UserNav/> : <AuthNav/>}<IconButton toggleMenu={toggleMenu} icon={`#burger-menu-mobile`}/></>}
        {isMobile && <IconButton toggleMenu={toggleMenu} icon={`#burger-menu-mobile`}/>}
        {(MenuOpen && isMobileOrTablet) &&
            <ModalNav>
                <Box>
                    <Logo/>
                    <IconButton toggleMenu={toggleMenu} icon={`#closeModal-button-mobile`}/>
                </Box>
                {isMobile && <>{isLoggedIn ? <UserNav toggleMenu={toggleMenu}/> : <AuthNav toggleMenu={toggleMenu}/>}</>}
                <Nav toggleMenu={toggleMenu}/>
            </ModalNav>}
    </Container>)
}