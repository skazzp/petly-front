import icon from '../../assets/images/icons.svg'
import { Link, UserSvg } from "../UserNav/UserNav.styled";

export const UserNav = ({toggleMenu}) => {
    return(<><Link to="/user" onClick={toggleMenu}>
        <UserSvg>
            <use href={icon + `#avatar-account`}></use>
        </UserSvg>
        <span>Account</span>
    </Link></>
    )
}