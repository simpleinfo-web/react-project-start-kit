import { createGlobalStyle } from 'styled-components';
import { colors } from '../../constants/colors';

import './reset.css';

const GlobalStyle = createGlobalStyle`

    * {
        box-sizing: border-box;
    }
    
    body {
        font-family: 'Noto Sans TC', sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        background: ${ colors.background };
        color: ${ colors.text };
    }

    a {
        color: currentColor;
        text-decoration: none;
    }

    a, button {
        cursor: pointer;
    }
`

export default GlobalStyle;