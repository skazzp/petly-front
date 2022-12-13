import { AuthNav } from "components/AuthNav/AuthNav"
import { Nav } from "components/Nav/Nav"
import { UserNav } from "components/UserNav/UserNav"
import { Link } from "react-router-dom"

export const Navigation = () => {
    return(<>
        <Nav/>
        <UserNav/>
        <AuthNav/>
    <button>
        <Link to='/test'>TEST</Link>
    </button>
    </>)
} 