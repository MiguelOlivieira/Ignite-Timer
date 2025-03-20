import { ThemeProvider } from "styled-components";
import { Button } from "./Button";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
export function App() {
  return (
    <ThemeProvider theme={defaultTheme}> {/* Adiciona o tema padrão ao aplicativo */}
      <Button variant="primary" />       {/* Propriedade variant personalizada */}
      <Button variant="secondary" />
      <Button variant="success" />
      <Button variant="danger" />
      <Button variant="error" />
      <GlobalStyle />
      </ThemeProvider>
  );
}