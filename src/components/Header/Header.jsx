import icon from '../../assets/images/icons.svg' 
import { Logo } from "components/Logo/Logo"
import { Navigation } from "components/Navigation/Navigation"
export const Header = () => {
    return ( <div style={{display: 'flex', justifyContent: 'space-between', alignItems: "center"}}>
    <Logo/>
    <svg style={{width: '30px', height: '20px'}}>
        <use href={icon + `#icon-menu`}></use>
    </svg>
    <Navigation/>
    </div>)
}