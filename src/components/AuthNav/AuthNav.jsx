import { AuthInversionNavigationLink, AuthNavLink, Box } from "components/Navigation/Navigation.styled"
import { Link, NavLink } from "react-router-dom"

export const AuthNav = ({toggleMenu}) => {
    return(
        <Box>
            <AuthNavLink to='/register' onClick={toggleMenu}>Login</AuthNavLink > 
            <AuthInversionNavigationLink to='/login' onClick={toggleMenu}>Registration</AuthInversionNavigationLink>
        </Box>
    )
}