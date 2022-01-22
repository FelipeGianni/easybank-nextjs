import styled, { css } from "styled-components";

export const Button = styled.a`
  ${({ theme }) => css`
    display: inline-block;
    padding: 0.875rem 2.1875rem;
    border-radius: 50px;
    font-size: ${theme.sizes.size_14};
    font-weight: 400;
    color: ${theme.colors.white};
    transition: opacity 200ms ease-in-out;
    background: ${`linear-gradient(to right, ${theme.colors.limeGreen}, ${theme.colors.brightCyan})`};

    &:hover {
      opacity: 0.5;
    }
  `}
`;
