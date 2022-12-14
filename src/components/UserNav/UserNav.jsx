import icon from '../../assets/images/icons.svg'
import { UserNavLink, UserSvg } from "../Navigation/Navigation.styled";

// export const UserNav = ({toggleMenu}) => {
//     return(<div>
// <UserNavLink to="/user" onClick={toggleMenu}>
//     <UserSvg>
//         <use href={icon + `#avatar-account`}></use>
//     </UserSvg>
//     <span>Account</span>
// </UserNavLink>
//     </div>)
// }

export const UserNav = ({toggleMenu}) => {
    return(<><UserNavLink to="/user" onClick={toggleMenu}>
        <UserSvg>
            <use href={icon + `#avatar-account`}></use>
        </UserSvg>
        <span>Account</span>
    </UserNavLink></>
    )
}