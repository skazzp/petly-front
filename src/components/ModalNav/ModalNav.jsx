import { useSelector } from "react-redux";
import { useMediaQuery } from 'react-responsive';
import { selectToken } from "redux/auth/authSelectors";
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserNav } from 'components/UserNav/UserNav';
import { Nav } from 'components/Nav/Nav';
// import { ModalContainer } from './ModalNav.styled';

// export const ModalNav = ({toggleMenu, isMenuOpen}) => {

//     return (
//     <ModalContainer>
//         {isLoggedIn ? <UserNav toggleMenu={toggleMenu}/> : <AuthNav toggleMenu={toggleMenu}/>}
//         <Nav toggleMenu={toggleMenu}/>
//     </ModalContainer>)}


const useIsMobile = () => useMediaQuery({ maxWidth: 767.98 });
const useIsTablet = () => useMediaQuery({minWidth: 768, maxWidth: 1279.98 });
// const useIsDesktop = () => useMediaQuery({ minWidth: 1280 });

export const ModalNav = () => {
    let isLoggedIn = useSelector(selectToken);
    isLoggedIn = true;

    return (<div style={{position: 'absolute', top: 82, left: 0, width: '100vw', height: '100vh', backgroundColor: '#FDF7F2', textAlign: 'center'}}>
    {useIsMobile() && <>{isLoggedIn ? <UserNav/> : <AuthNav/>} <Nav/></>}
    {useIsTablet() && <Nav/>}
    </div>
    )
}