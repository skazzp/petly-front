import { Outlet } from "react-router-dom";
import { Header } from "components/Header";
import { GlobalContainer} from "./SharedLayout.styled";

export const SharedLayout = () => {
    return (<><GlobalContainer>
        <Header/>
        <Outlet/>
    </GlobalContainer> </>)
}




