import { DivProps } from "../../types";
import { GridItemWrapper, GridItemWrapperProps } from "./grid.style";

export interface GridItemProps extends DivProps, GridItemWrapperProps {}

const GridItem = ({ children, ...props }: GridItemProps) => {
  return <GridItemWrapper {...props}>{children}</GridItemWrapper>;
};

export default GridItem;

GridItem.defaultProps = {
  _md: 3,
  _sm: 6,
  _xs: 12,
  _lg: 1,
};
