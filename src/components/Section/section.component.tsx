import { DivProps } from "../../types"
import { SectionWrapper, SectionWrapperProps } from "./style"

interface SectionProps extends DivProps, SectionWrapperProps {}

const Section = ({children, ...props}: SectionProps) => {
    return (
        <SectionWrapper {...props}>
            {children}
        </SectionWrapper>
    )
}

export default Section

Section.defaultProps = {
    _flex: false
}