import { Outlet } from "react-router-dom";
import { LayoutContainer } from "./styles";
import { Header } from "../../Header/index";


export function DefaultLayout(){
    return(
        <LayoutContainer>
            
            <Header/>
            <Outlet />  {/* Placeholder para renderizar os componentes das rotas filhas (DefaultLayout em Router.tsx) */}
        </LayoutContainer>
    )
}