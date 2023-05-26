import { DivProps } from "../../types";
import { SectionWrapperProps } from "../Section/section.style";
import { GridWrapper } from "./grid.style";

export interface GridProps extends DivProps, SectionWrapperProps {}

const Grid = ({ children, ...props }: GridProps) => {
  return <GridWrapper {...props}>{children}</GridWrapper>;
};

export default Grid;

Grid.defaultProps = {
  _flex: false,
  _justifycontent: "flex-start",
  _gap: "0",
  _direction: "row",
  _alignitems: "center",
};
