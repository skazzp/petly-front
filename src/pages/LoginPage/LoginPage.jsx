import LoginForm from "components/LoginForm/LoginForm";
import { GlobalStyleRegistration } from "pages/RegistrationPage/RegistrationPage.styled";
import { Div } from "./LoginPage.styled";

const LoginPage = () => {
    return (<Div>
        <GlobalStyleRegistration/><LoginForm /></Div>)
}
 
export default LoginPage;