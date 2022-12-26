import { createGlobalStyle } from 'styled-components';
import { colors } from './colors';
import { space, lineHeights } from './spacing';
import { sizes } from './sizes';
import { fonts, fontWeights, fontSizes } from './fonts';

export const theme = {
  colors,
  space,
  lineHeights,
  sizes,
  fonts,
  fontSizes,
  fontWeights,
};

export type MyProps = {
  theme: typeof theme;
};

export const GlobalStyle = createGlobalStyle<MyProps>`
    *,
    *:before,
    *:after {
        box-sizing: inherit;
    }
    html {
        box-sizing: border-box;
    }
    body {
        position: relative;
        color: ${(p) => p.theme.colors.brand};
        font-family: NeueHelvetica, Helvetica, Arial, sans-serif;
        font-size: clamp(12px, 5vw, 15px);
        letter-spacing: 1px;
        margin: 0;
        padding: 0;
    }
    button {
        background-color: transparent;
    }
    img {
        border: none;
    }
    a {
        color: inherit;
        text-decoration: none;
    }
    ul {
        margin: 0;
        padding: 0;
    }
`;
