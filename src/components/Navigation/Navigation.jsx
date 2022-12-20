import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectToken } from "redux/auth/authSelectors";
import {useIsDesktop, useIsMobile, useIsMobileOrTablet, useIsTablet} from '../../hooks/mediaQuery'
import { AuthNav } from "components/AuthNav";
import { ModalNav } from "components/ModalNav";
import { Nav } from "components/Nav";
import { UserNav } from "components/UserNav";
import { Logo } from "components/Logo";
import { IconButton } from "components/IconButton";
import { Container, Box } from "./Navigation.styled";
import { Spin as Hamburger } from 'hamburger-react'
import { isModalOpen } from "redux/modal/modalSelectors";
import { toggleModal } from "redux/modal/modalSlice";
export const Navigation = () => {
    let isLoggedIn = useSelector(selectToken);
    const modalOpen = useSelector(isModalOpen)
    // isLoggedIn = true;
    const isMobile = useIsMobile();
    const isTablet = useIsTablet();
    const isDesktop = useIsDesktop();
    const isMobileOrTablet = useIsMobileOrTablet()
    const dispatch = useDispatch();
    // const [MenuOpen, setMenuOpen] = useState(false)
    // const toggleMenu = () => {
    //     setMenuOpen(!MenuOpen)
    // }
const modalToggled = ()=> dispatch(toggleModal())
    return(
    <Container> 
        {isDesktop && <><Nav/>{isLoggedIn ? <UserNav /> : <AuthNav/>}</>}
        {isTablet && <>{isLoggedIn ? <UserNav/> : <AuthNav/>}<Hamburger toggled={modalOpen} toggle={modalToggled} /></>}
        {isMobile && <Hamburger toggled={modalOpen} toggle={modalToggled} />}
        {(modalOpen && isMobileOrTablet) &&
            <ModalNav>
                {isMobile && <>{isLoggedIn ? <UserNav toggleMenu={modalToggled}/> : <AuthNav toggleMenu={modalToggled}/>}</>}
                <Nav toggleMenu={modalToggled}/>
            </ModalNav>}
    </Container>)
}