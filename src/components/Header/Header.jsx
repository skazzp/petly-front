// import icon from '../../assets/images/icons.svg' 

import { Logo } from "components/Logo/Logo"
import { Navigation } from "components/Navigation/Navigation"
import { Container} from './Header.styled'


export const Header = () => {
    return(<Container>
        <Logo/>
        <Navigation/>
    </Container>)
}


// export const Header = ({toggleMenu, isMenuOpen}) => {

//     return ( <div style ={{position: "relative"}}>
//         <Container >
//         <Logo/>
//         <Navigation>
//             <Nav/>
//             <UserNav/>
//             <AuthNav/>
//         </Navigation>
        
//         {/* <IconBtn  onClick={toggleMenu}>
//                 <use href={icon + (isMenuOpen ? `#closeModal-button-mobile` : `#burger-menu-mobile`)}></use>
                
//         </IconBtn> */}
//         </Container>
//     </div>)
// }

