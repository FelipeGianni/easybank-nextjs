import styled, { css } from "styled-components";

export const Container = styled.section`
  ${({ theme }) => css`
    padding: 0 1.5rem;
    text-align: center;
    background-color: ${theme.colors.lightGrayishBlue};

    @media all and (min-width: ${theme.breakpoints.xl}) {
      padding: 0 10rem;
      text-align: left;
    }
  `}
`;

export const Title = styled.div`
  ${({ theme }) => css`
    h2 {
      padding-top: 4rem;
      padding-bottom: 1.25rem;
    }

    p {
      padding-bottom: 3.375rem;
      line-height: 1.75rem;
    }

    @media all and (min-width: ${theme.breakpoints.xl}) {
      h2 {
        padding-top: 6.875rem;
        padding-bottom: 1.875rem;
      }

      p {
        padding-right: 22rem;
        padding-bottom: 4.675rem;
      }
    }
  `}
`;

export const Options = styled.div`
  ${({ theme }) => css`
    display: block;
    padding-bottom: 1.875rem;

    @media all and (min-width: ${theme.breakpoints.xl}) {
      display: flex;
    }
  `}
`;

export const Option = styled.div`
  ${({ theme }) => css`
    img {
      padding-bottom: 1.625rem !important;
    }

    h3 {
      padding-bottom: 1.25rem;
    }

    p {
      font-size: ${theme.sizes.size_16};
      line-height: 1.6;
      padding-bottom: 1.875rem;
    }

    @media all and (min-width: ${theme.breakpoints.xl}) {
      flex: 1;
      padding-right: 1.2rem;

      &:last-child {
        padding-right: 0;
      }

      img {
        padding-bottom: 2.5rem;
      }
    }
  `}
`;
