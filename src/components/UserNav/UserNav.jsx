import { Link, NavLink } from "react-router-dom";
import icon from '../../assets/images/icons.svg'
export const UserNav = ({toggleMenu}) => {
    return(<div>
<NavLink to="/user" style={{display: 'block', textAlign: "center"}} onClick={toggleMenu}>
    <svg style={{width: '17px', height: '17px'}}>
        <use href={icon + `#icon-avatar`} ></use>
    </svg>
    <span>Account</span>
</NavLink>
    </div>)
}