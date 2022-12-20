import icon from '../../assets/images/icons.svg'
import { Link, UserSvg } from "../UserNav/UserNav.styled";

export const UserNav = ({closeMenu}) => {
    return(<><Link to="/user" onClick={closeMenu}>
        <UserSvg>
            <use href={icon + `#avatar-account`}></use>
        </UserSvg>
        <span>Account</span>
    </Link></>
    )
}