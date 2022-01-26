import styled, { css } from "styled-components";

interface IMenu {
  isMenuOpen: boolean;
}

export const Container = styled.header`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    padding: 1rem 1.5rem;
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

export const Menu = styled.button<IMenu>`
  ${({ theme, isMenuOpen }) => css`
    background-color: transparent};
    border: 0;

    > span {
      display: block;
      width: 1.625rem;
      height: 2px;
      background-color: ${theme.colors.darkBlue};
      transition: all 300ms ease-in-out;
      transform-origin: left center;

      &:not(:last-child) {
        margin-bottom: 5px;
      }
    }

    ${
      isMenuOpen &&
      css`
        > span:first-child {
          transform: translate(5px, -3px) rotate(45deg);
        }

        > span:nth-child(2) {
          opacity: 0;
        }

        > span:last-child {
          transform: translate(5px, 2px) rotate(-45deg);
        }
      `
    }
  `}
`;

export const Overlay = styled.div`
  ${({ theme }) => css`
    position: fixed;
    top: 3.25rem;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 15;
    background-image: ${`linear-gradient(${theme.colors.darkBlue}, transparent)`};
  `}
`;

export const MenuItems = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 4.625rem;
    text-align: center;
    background-color: ${theme.colors.white};
    width: calc(100% - 3rem);
    border-radius: 5px;
    padding: 1.5rem;
    z-index: 20;

    a {
      display: block;
      color: ${theme.colors.darkBlue};
      font-weight: 400;

      &:not(:last-child) {
        margin-bottom: 1.5rem;
      }
    }
  `}
`;
