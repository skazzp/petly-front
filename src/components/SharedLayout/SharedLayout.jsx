import { Outlet, useLocation } from "react-router-dom";
import { Header } from "components/Header";

import { GlobalContainer } from "./SharedLayout.styled";

export const SharedLayout = () => {
    const { pathname } = useLocation()
    return (<GlobalContainer pathName={pathname}>
        <Header/>
        <Outlet/>
    </GlobalContainer>)
}




