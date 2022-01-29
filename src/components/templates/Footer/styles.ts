import styled, { css } from "styled-components";

export const Container = styled.footer`
  ${({ theme }) => css`
    display: inline-block;
    height: 29.375rem;
    width: 100%;
    padding: 2.25rem 1.5rem;
    text-align: center;
    background-color: ${theme.colors.darkBlue};

    @media all and (min-width: ${theme.breakpoints.xl}) {
      display: flex;
      justify-content: space-around;
      height: 11.875rem;
      padding: 2.875rem 10rem;
      text-align: left;
    }
  `}
`;

export const Column = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media all and (min-width: ${theme.breakpoints.xl}) {
      flex-direction: row;
    }
  `}
`;

export const Social = styled.div`
  ${({ theme }) => css`
    margin-bottom: 1.875rem;

    @media all and (min-width: ${theme.breakpoints.xl}) {
      width: 18rem;
      margin-bottom: 0;
    }
  `}
`;

export const Logo = styled.div`
  ${({ theme }) => css`
    display: inline-block;
    height: 1.25rem;
    margin-bottom: 1.625rem;

    @media all and (min-width: ${theme.breakpoints.xl}) {
      margin-bottom: 3.125rem;
    }
  `}
`;

export const Icon = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const FirstLinks = styled.div`
  ${({ theme }) => css`
    @media all and (min-width: ${theme.breakpoints.xl}) {
      width: 12rem;
    }
  `}
`;

export const SecondLinks = styled.div`
  ${({ theme }) => css`
    margin-bottom: 1.875rem;

    @media all and (min-width: ${theme.breakpoints.xl}) {
      margin-bottom: 0;
      width: 15rem;
    }
  `}
`;

export const Clickable = styled.a`
  ${({ theme }) => css`
    display: block;
    color: ${theme.colors.lightGrayishBlue};
    margin-bottom: 1rem;

    @media all and (min-width: ${theme.breakpoints.xl}) {
      font-size: ${theme.sizes.size_14};
    }
  `}
`;

export const Final = styled.div`
  ${({ theme }) => css`
    @media all and (min-width: ${theme.breakpoints.xl}) {
      width: 19rem;
      text-align: right;
      float: right;
    }
  `}
`;

export const Copyright = styled.p`
  ${({ theme }) => css`
    margin-top: 1.5rem;

    @media all and (min-width: ${theme.breakpoints.xl}) {
      font-size: ${theme.sizes.size_16};
    }
  `}
`;
