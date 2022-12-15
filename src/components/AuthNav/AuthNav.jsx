import {Link, LinkInversion, AuthItem, AuthBox} from './AuthNav.styled'

export const AuthNav = ({toggleMenu = null}) => {
return(<AuthBox>
    <AuthItem><Link to="/login" onClick={toggleMenu}>Login</Link></AuthItem>
    <AuthItem><LinkInversion to="/register" onClick={toggleMenu}>Registrations</LinkInversion></AuthItem>
</AuthBox>)

}