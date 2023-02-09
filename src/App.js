import { ThemeProvider } from 'styled-components.cjs.js'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
    Oiiiiiiii
    <GlobalStyle />
    </ThemeProvider>
  );
}
