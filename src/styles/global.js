import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme['purple-800']};
    color: ${(props) => props.theme['white']};
    overflow: visible;
  }

  body, input-security, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
`
