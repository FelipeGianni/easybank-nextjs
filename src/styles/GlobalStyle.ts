import styled, { createGlobalStyle } from 'styled-components'
import { theme } from './theme'

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`

export default createGlobalStyle`
  html {
    min-height: 100%;
    overscroll-behavior: contain;
    scroll-behavior: smooth;
    font-size: 16px;
  }

  :root {
    --light: #ffffff;
    --dark: #000000;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Work Sans';
    font-weight: 500;
    color: ${theme.colors.light};
    background: white;
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

  h1 {
    font-size: ${theme.sizes.size_30};
    font-weight: 600;
    line-height: 2.75rem;

    @media all and (min-width: ${theme.breakpoints.xl}) {
      font-size: ${theme.sizes.size_44};
      line-height: 3.75rem;
    }
  }

  button {
    font-family: inherit;
    cursor: pointer;
    user-select: none;
    outline: none;
  }

  img {
    user-select: none;
  }
`
