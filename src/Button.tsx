import { ButtonContainer } from "./Button.styles";

interface ButtonProps {
    variant?: 'primary' | 'secondary' | 'danger' | 'success' | 'error'; // Propriedade opcional para definir a variante
}

// Componente de botão com variante padrão 'primary'
export function Button({ variant = 'primary' }: ButtonProps) {
    return (
        // Passa a variante para o componente estilizado
        <ButtonContainer variant={variant}>Enviar</ButtonContainer>
    );
}