import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    * {
        @font-face {
            font-family: proxima-nova, sans-serif;
            font-style: normal;
            font-weight: 400;
            src: local(proxima-nova, sans-serif), local(proxima-nova, sans-serif), url('https://use.typekit.net/yfx5kpz.css') format('css');
            font-display: swap;
        }

        padding: 0;
        margin: 0;
        box-sizing: border-box;

        body {
            h1, h2, h3, h4, h5, h6 {
                font-family: proxima-nova, sans-serif;
                font-weight: 700;
                font-style: normal;
            }
            p, a, li, span {
                font-family: proxima-nova, sans-serif;
                font-weight: 400;
                font-style: normal;
            }
        }
    }
`

export default GlobalStyles
