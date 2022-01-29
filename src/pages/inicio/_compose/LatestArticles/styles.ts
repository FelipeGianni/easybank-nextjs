import styled, { css } from "styled-components";

export const Container = styled.section`
  ${({ theme }) => css`
    padding: 5.25rem 1.5rem 5rem;
    background-color: ${theme.colors.veryLightGray};

    @media all and (min-width: ${theme.breakpoints.xl}) {
      padding: 6rem 10rem 5rem;
    }
  `}
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    padding-bottom: 1.625rem;
    text-align: center;

    @media all and (min-width: ${theme.breakpoints.xl}) {
      padding-bottom: 2.875rem;
      text-align: left;
    }
  `}
`;

export const Grid = styled.div`
  ${({ theme }) => css`
    display: grid;
    justify-items: center;
    grid-template-columns: 1fr;
    gap: 3rem;

    @media all and (min-width: ${theme.breakpoints.xl}) {
      justify-content: space-evenly;
      grid-template-columns: repeat(2, 1fr);
      gap: 1.875rem;
    }

    @media all and (min-width: 1450px) {
      grid-template-columns: repeat(4, 1fr);
    }
  `}
`;

export const GridItem = styled.a`
  ${({ theme }) => css`
    width: 18.75rem;
    border-radius: 5px;
    background-color: ${theme.colors.white};
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.15);
    transition: all 150ms ease-in-out;

    &:hover {
      transform: scale(1.05);
    }

    @media all and (min-width: ${theme.breakpoints.xl}) {
      width: 16rem;
    }
  `}
`;

export const BackImage = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 18.75rem;
    height: 12.5rem;
    border-radius: 5px 5px 0px 0px;

    @media all and (min-width: ${theme.breakpoints.xl}) {
      width: 16rem;
      height: 12.5rem;
    }
  `}
`;

export const Content = styled.div`
  padding: 1.625rem;
`;

export const Author = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.sizes.size_12};
    font-weight: 300;
    color: ${theme.colors.grayishBlue};
    padding-bottom: 0.75rem;

    @media all and (min-width: ${theme.breakpoints.xl}) {
      padding-bottom: 0.875rem;
    }
  `}
`;

export const ArticleTitle = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.darkBlue};
    font-size: ${theme.sizes.size_16};
    font-weight: 400;
    padding-bottom: 0.75rem;

    @media all and (min-width: ${theme.breakpoints.xl}) {
      padding-bottom: 0.875rem;
    }
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.sizes.size_14};
    font-weight: 300;
    color: ${theme.colors.grayishBlue};

    @media all and (min-width: ${theme.breakpoints.xl}) {
      font-size: 0.675rem;
    }
  `}
`;
