import styled from 'styled-components';

type ButtonVariantColor = 'primary' | 'secondary' | 'danger' | 'success' | 'error';

interface ButtonContainerProps {
   variant: ButtonVariantColor;
}

const buttonVariants = {
    primary: 'purple',
    secondary: 'orange',
    danger: 'red',
    success: 'green',
    error: 'magenta',
};

// Componente estilizado que herda a tag <button>
export const ButtonContainer = styled.button<ButtonContainerProps>`
    width: 100px;
    height: 40px;

    background-color: ${props => props.theme['green-500']};
    color: ${props => props.theme.white}
`;


 /*${props => 
        `background-color: ${buttonVariants[props.variant]};` // Define a cor de fundo com base na variante
    } */