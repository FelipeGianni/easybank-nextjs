import styled, { css } from "styled-components";

export const Container = styled.section`
  ${({ theme }) => css`
    padding-bottom: 5rem;
    background-color: ${theme.colors.veryLightGray};

    @media all and (min-width: ${theme.breakpoints.xl}) {
      display: flex;
      align-items: center;
      padding: 0 0 0 10rem;
    }
  `}
`;

export const SiteImage = styled.div`
  ${({ theme }) => css`
    position: relative;
    background-image: url("./assets/bg-intro-mobile.svg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    min-height: 17.5rem;
    margin-bottom: 2.1875rem;

    @media all and (min-width: ${theme.breakpoints.xl}) {
      overflow-x: hidden;
      background-image: url("./assets/bg-intro-desktop.svg");
      background-size: 172%;
      background-position: 10% 70%;
      height: 41rem;
      margin-bottom: 0;
      flex: 8;
      order: 2;
    }

    &::before {
      content: "";
      position: absolute;
      height: 106%;
      width: 100%;
      max-width: 32rem;
      right: 0;
      left: 0;
      margin: 0 auto;
      background-image: url("./assets/image-mockups.png");
      background-size: 90%;
      background-repeat: no-repeat;
      background-position: center bottom;

      @media all and (min-width: ${theme.breakpoints.xl}) {
        top: 0;
        right: 0;
        left: 7rem;
        height: 100%;
        width: 90%;
        max-width: 43rem;
        background-size: 100%;
        background-position: center bottom;
      }
    }
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    padding: 0 1.25rem;
    text-align: center;

    h1 {
      margin-bottom: 1.25rem;
    }

    p {
      margin-bottom: 1.875rem;
      line-height: 1.675rem;
    }

    @media all and (min-width: ${theme.breakpoints.xl}) {
      padding: 0;
      text-align: left;
      max-width: 28.5rem;
    }
  `}
`;
