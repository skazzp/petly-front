import { AuthInversionNavigationLink, AuthNavLink, Box } from "components/Navigation/Navigation.styled"
import { Link, NavLink } from "react-router-dom"

export const AuthNav = ({toggleMenu}) => {
    return(
        <Box>
            <AuthNavLink to='/login' onClick={toggleMenu}>Login</AuthNavLink > 
            <AuthInversionNavigationLink to='/register' onClick={toggleMenu}>Registration</AuthInversionNavigationLink>
        </Box>
    )
}