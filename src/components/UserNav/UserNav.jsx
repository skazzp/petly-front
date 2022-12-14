import icon from '../../assets/images/icons.svg'
import { UserNavLink } from "../Navigation/Navigation.styled";

export const UserNav = ({toggleMenu}) => {
    return(<div>
<UserNavLink to="/user" onClick={toggleMenu}>
    <svg style={{width: '17px', height: '17px'}}>
        <use href={icon + `#icon-avatar`} ></use>
    </svg>
    <span>Account</span>
</UserNavLink>
    </div>)
}