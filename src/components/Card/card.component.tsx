import { ReactNode } from "react";
import { theme } from "../../styles/theme";
import { DivProps } from "../../types";
import { CardWrapper, CardWrapperProps } from "./style";

export interface CardProps extends DivProps, CardWrapperProps {}

const Card = ({ children, ...props }: CardProps) => {
  return <CardWrapper {...props}>{children}</CardWrapper>;
};

export default Card;

Card.defaultProps = {
  _px: theme.margin.X4,
  _py: theme.margin.X4,
};
