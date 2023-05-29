import { styled } from "styled-components";

export const LinkText = styled("p")`
  font-size: ${({ theme }: any) => theme.fontSizes.smallest};
  a {
    padding: ${({ theme }: any) => theme.margin.X1};
    color: ${({ theme }: any) => theme.colors.primary};
    font-size: ${({ theme }: any) => theme.fontSizes.smallest};
  }
`;
export const TextWrapper = styled("div")<{ _direction?: string }>`
  text-align: ${({ _direction }: any) => _direction};

  h1,
  h2,
  h3,
  h4 {
    color: ${({ theme }) => theme.colors.textColor};
  }

  &.textprimary {
    color: ${({ theme }) => `${theme.colors.primary} !important`};
    p,
    h1,
    h2,
    h3,
    h4 {
      color: ${({ theme }) => `${theme.colors.primary} !important`};
    }
  }

  h1 {
    font-size: ${({ theme }: any) => theme.fontSizes.largest};
    padding: ${({ theme }: any) => theme.margin.X4};
  }

  h2 {
    font-size: ${({ theme }: any) => theme.fontSizes.large};
    padding: ${({ theme }: any) => theme.margin.X3};
  }

  h3 {
    font-size: ${({ theme }: any) => theme.fontSizes.medium};
    padding: ${({ theme }: any) => theme.margin.X2};
  }

  p {
    font-size: ${({ theme }: any) => theme.fontSizes.small};
  }

  small {
    font-size: ${({ theme }: any) => theme.fontSizes.smallest};
  }

  @media (max-width: ${({ theme }: any) => theme.screens.sm}) {
    h1 {
      font-size: ${({ theme }: any) => theme.mobile.fontSizes.largest};
      padding: ${({ theme }: any) => theme.mobile.margin.X4};
    }

    h2 {
      font-size: ${({ theme }: any) => theme.mobile.fontSizes.large};
      padding: ${({ theme }: any) => theme.mobile.margin.X3};
    }

    h3 {
      font-size: ${({ theme }: any) => theme.mobile.fontSizes.medium};
      padding: ${({ theme }: any) => theme.mobile.margin.X2};
    }

    p {
      font-size: ${({ theme }: any) => theme.mobile.fontSizes.small};
    }
  }
`;
