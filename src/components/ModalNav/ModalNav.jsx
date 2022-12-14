import { useSelector } from "react-redux";
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

let isTablet = false;
let isMobile = false

export const ModalNav = () => {
    let isLoggedIn = useSelector(selectToken);
    isLoggedIn = true;

    return (<div style={{position: 'absolute', top: 82, left: 0, width: '100vw', height: '100vh', backgroundColor: '#FDF7F2', }}>
    {isMobile && <>{isLoggedIn ? <UserNav /> : <AuthNav />}<Nav/></>}
    {isTablet && <Nav/>}
    </div>
    )
}