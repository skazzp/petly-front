import { useDispatch} from "react-redux";
import { LogoNormal, LogoAccent, LogoLink } from "./Logo.styled"
import { closeModal } from "redux/modal/modalSlice";

export const Logo = () => {
const dispatch = useDispatch()
    const modalClosed = () => dispatch(closeModal())
    return (<div>
        <LogoLink to='/' onClick={modalClosed}><LogoNormal>pe<LogoAccent>t</LogoAccent>ly</LogoNormal></LogoLink>
        </div>
    )
}