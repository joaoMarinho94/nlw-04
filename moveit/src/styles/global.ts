import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @media(max-width: 1000px){
    html {
      font-size: 93.75%;
    }
  }

  @media(max-width: 720px){
    html {
      font-size: 87.5%;
    }
  }

  @media (max-width: 520px) {
    html {
      font-size: 77.5%;
    }
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
  }

  body,
  input,
  textarea,
  button {
    font: 400 16px "Inter", sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`
