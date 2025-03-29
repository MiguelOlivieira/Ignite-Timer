// Exclusivo para definição de tipos TYPESCRIPT (apenas tipagem)

import { StyledComponent } from 'styled-components'
import { defaultTheme } from '../styles/themes/default' // importando o defaultTheme

type ThemeType = typeof defaultTheme // Passando os tipos do defaultTheme para a variável ThemeType
// Afim de evitar erros no ThemeType quando atualizarmos o

declare module 'styled-components' {
  // Sobscrevendo
  export interface DefaultTheme extends ThemeType {}
}
