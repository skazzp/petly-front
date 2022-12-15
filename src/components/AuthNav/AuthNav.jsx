import {Link, LinkInversion, AuthItem, AuthBox} from './AuthNav.styled'

// export const AuthNav = ({toggleMenu}) => {
//     return(
//         <Box>
//             <AuthNavLink to='/login' onClick={toggleMenu}>Login</AuthNavLink > 
//             <AuthInversionNavigationLink to='/register' onClick={toggleMenu}>Registration</AuthInversionNavigationLink>
//         </Box>
//     )
// }

export const AuthNav = () => {
return(<AuthBox>
    <AuthItem style={{marginRight: '20px'}}><Link>Login</Link></AuthItem>
    <AuthItem><LinkInversion>Registrations</LinkInversion></AuthItem>
</AuthBox>)

}