import { Link } from "react-router-dom"

export const AuthNav = () => {
    return(
        <div>
            <Link to='/register'>RegisterPage</Link>
            <Link to='/login'>LoginPage</Link>
        </div>
    )
}