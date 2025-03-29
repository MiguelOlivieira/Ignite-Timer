import styled from "styled-components";
                                    //header é a tag que será afetada
export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav{
    display: flex;
    gap: 0.5rem;

    a {
        width: 3rem;

        height: 3rem;

        display: flex;
        justify-content: center;
        align-items: center;

        color: ${(props) => props.theme['gray-100']};

        border-top: 3px solid transparent;
        border-bottom: 3px solid transparent; /*evita que os icones fiquem mexendo quando ativa o hover*/

        &:hover{
            border-bottom: 3px solid ${(props) => props.theme['green-500']};
        }

        &.active {  /*altera a cor do icone quando climamos nele*/
        color: ${(props) => props.theme['green-500']};
        }

       }
    }
`;