import { DivProps } from "../../types";
import Grid from "../Grid/grid.component";
import { GridContent } from "../Grid/grid.style";
import { SectionWrapper, SectionWrapperProps } from "./section.style";

interface SectionProps extends DivProps, SectionWrapperProps {}

const Section = ({ children, ...props }: SectionProps) => {
  return <SectionWrapper {...props}>{children}</SectionWrapper>;
};

export default Section;

Section.defaultProps = {
  _flex: false,
};
