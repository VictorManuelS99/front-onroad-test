import styled, { createGlobalStyle, DefaultTheme } from "styled-components";

import { colors } from "./colors";

export const GlobalStyle = createGlobalStyle`
    html, body {
        margin: 0;
        font-family: 'Roboto', sans-serif;
    }
`;

export const Root = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${colors.background.main};
`;

export const theme: DefaultTheme = {
  colors,
};
