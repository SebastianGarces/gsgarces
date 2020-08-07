import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;

        body {
            h1, h2, h3, h4, h5, h6 {
                font-family: neue-haas-unica, sans-serif;
                font-weight: 700;
                font-style: normal;
            }
            p, a, li, span, button {
                font-family: neue-haas-unica, sans-serif;
                font-weight: 400;
                font-style: normal;
            }
        }
    }
`

export default GlobalStyles
