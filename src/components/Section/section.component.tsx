import { DivProps } from "../../types";
import { GridContent } from "../Grid/grid.style";
import { SectionWrapper, SectionWrapperProps } from "./style";

interface SectionProps extends DivProps, SectionWrapperProps {}

const Section = ({ children, ...props }: SectionProps) => {
  return (
    <SectionWrapper {...props}>
      <GridContent>{children}</GridContent>
    </SectionWrapper>
  );
};

export default Section;

Section.defaultProps = {
  _flex: false,
};
