import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        outline: none;

        body {
            background-color: ${({ theme }) => theme.colors.bg.primary};
            overflow: hidden;
            
            h1, h2, h3, h4, h5, h6 {
                font-family: poppins, sans-serif;
                font-weight: 700;
                font-style: normal;
                color: ${({ theme }) => theme.colors.accent.primary};
            }
            p, a, li, span, button {
                font-family: poppins, sans-serif;
                font-weight: 400;
                font-style: normal;
            }
            a {
        		cursor: pointer;
            }
        }
    }
`

export default GlobalStyles
