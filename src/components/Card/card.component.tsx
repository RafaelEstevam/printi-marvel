import { theme } from "../../styles/theme";
import { DivProps } from "../../types";
import { CardWrapper, CardWrapperProps } from "./card.style";

export interface CardProps extends DivProps, CardWrapperProps {}

const Card = ({ children, ...props }: CardProps) => {
  return <CardWrapper {...props}>{children}</CardWrapper>;
};

export default Card;

Card.defaultProps = {
  _px: theme.margin.X6,
  _py: theme.margin.X6,
};
