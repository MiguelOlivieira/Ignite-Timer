import { HeaderContainer } from "./styles";
import {Timer, Scroll } from 'phosphor-react';
import Logo_Ignite from '../assets/Logo_Ignite.svg';
import { NavLink } from "react-router-dom";
export function Header(){
    return <HeaderContainer>
        <img src={Logo_Ignite} alt="" />
        <nav>
            <NavLink to="/" title="Timer"> {/* NavLink e to permitem navegam entre as paginas (sem precisar usar a tag a)*/}
            <Timer size ={24}/>
            </NavLink>
            <NavLink to="/history" title="Histórico">
            <Scroll size ={24}/>
            </NavLink>
        </nav>
    </HeaderContainer>
}