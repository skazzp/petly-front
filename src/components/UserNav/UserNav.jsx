import { Link } from "react-router-dom";
import icon from '../../assets/images/icons.svg'
export const UserNav = () => {
    return(<div>
<Link to="/user">
    <svg>
        <use href={icon + `#icon-avatar`}></use>
    </svg>
    <span>Account</span>
</Link>
    </div>)
}