import styled, { css } from "styled-components";

export const Container = styled.header`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    padding: 1rem 10rem;
  `}
`;

export const NavBar = styled.nav`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.a`
  width: 8.75rem;
  height: 1.25rem;
`;

export const Button = styled.a`
  ${({ theme }) => css`
    position: relative;
    font-size: ${theme.sizes.size_14};
    color: ${theme.colors.grayishBlue};
    transition: color 200ms ease-in-out;

    &:not(:last-child) {
      margin-right: 1.875rem;
    }

    &::before {
      content: "";
      position: absolute;
      display: block;
      height: 0.25rem;
      background: ${`linear-gradient(to right, ${theme.colors.limeGreen}, ${theme.colors.brightCyan})`};
      left: 0;
      right: 0;
      bottom: -1.875rem;
      opacity: 0;
      transition: opacity 200ms ease-in-out;
    }

    &:hover {
      color: ${theme.colors.darkBlue};

      &::before {
        opacity: 1;
      }
    }
  `}
`;
