import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
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

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
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

  .container{
    height: 100vh;
    max-width: 992px;
    margin: 0 auto;
    padding: 2.5rem 2rem;

    display: flex;
    flex-direction: column;
  }
`
