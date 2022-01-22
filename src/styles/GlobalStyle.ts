import styled, { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`;

export default createGlobalStyle`
  html {
    min-height: 100%;
    overscroll-behavior: contain;
    scroll-behavior: smooth;
    font-size: 16px;
  }

  :root {
    --darkBlue: hsl(233, 26%, 24%);
    --limeGreen: hsl(136, 65%, 51%);
    --brightCyan: hsl(192, 70%, 51%);
    --grayishBlue: hsl(233, 8%, 62%);
    --lightGrayishBlue: hsl(220, 16%, 96%);
    --veryLightGray: hsl(0, 0%, 98%);
    --white: hsl(0, 0%, 100%);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Public Sans', sans-serif;
    font-weight: 300;
    color: ${theme.colors.grayishBlue};
    background: ${theme.colors.veryLightGray};
    overflow-y: overlay;
    overflow-x: hidden;
    overscroll-behavior: contain;

    ::-webkit-scrollbar {
      height: ${theme.sizes.size_32};
      width: ${theme.sizes.size_16};
    }

    ::-webkit-scrollbar-track {
      background: transparent;
    }

    ::-webkit-scrollbar-thumb {
      background-clip: padding-box;
      background-color: rgba(0, 0, 0, 0.1);
      border: 6px solid transparent;
      border-radius: 10px;
      -webkit-border-radius: 10px;
    }
  }

  h1, h2, h3 {
    margin: 0;
    line-height: 1.3;
    font-weight: 400;
    color: ${theme.colors.darkBlue};
  }

  h1 {
    font-size: ${theme.sizes.size_34};

    @media all and (min-width: ${theme.breakpoints.xl}) {
      font-size: ${theme.sizes.size_50};
    }
  }

  h2 {
    font-size: ${theme.sizes.size_30};

    @media all and (min-width: ${theme.breakpoints.xl}) {
      font-size: ${theme.sizes.size_38};
    }
  }

  h3 {
    font-size: ${theme.sizes.size_20};

    @media all and (min-width: ${theme.breakpoints.xl}) {
      font-size: ${theme.sizes.size_22};
    }
  }

  p {
    margin: 0;

    @media all and (min-width: ${theme.breakpoints.xl}) {
      font-size: ${theme.sizes.size_18};
    }
  }

  a, a:visited, a:hover {
    text-decoration: none;
    cursor: pointer;
  }

  img {
    user-select: none;
  }
`;
