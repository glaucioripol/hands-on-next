import { createGlobalStyle } from 'styled-components'

export const Reset = createGlobalStyle`
  :root {
    --heightTopBarDesktop: 6rem;
    --heightTopBarMobile: 12rem;
  }

  * {
    box-sizing: border-box;
    font-family: 'Fira Code', monospace;
    margin: 0;
    padding: 0;
  }
  ol,
  ul {
    list-style: none;
  }
`
