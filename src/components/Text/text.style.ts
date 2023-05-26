import { styled } from "styled-components";

export const TextWrapper = styled("div")<{ _direction?: string }>`
  text-align: ${({ _direction }: any) => _direction};

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
`;
