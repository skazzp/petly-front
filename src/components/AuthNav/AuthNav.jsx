// import { AuthInversionNavigationLink, AuthNavLink, Box } from "components/Navigation/Navigation.styled"
// import { Link, NavLink } from "react-router-dom"

// export const AuthNav = ({toggleMenu}) => {
//     return(
//         <Box>
//             <AuthNavLink to='/login' onClick={toggleMenu}>Login</AuthNavLink > 
//             <AuthInversionNavigationLink to='/register' onClick={toggleMenu}>Registration</AuthInversionNavigationLink>
//         </Box>
//     )
// }

export const AuthNav = () => {
return(<ul style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', listStyle: 'none'}}>
    <li style={{marginRight: '20px'}}><button>Login</button></li>
    <li><button>Registrations</button></li>
</ul>)

}