import { ButtonWrapper } from "./style";

interface ButtonProps {
  label: string;
  id: string;
  type: "button" | "submit" | "reset";
}

const Button = ({ label, ...props }: ButtonProps) => {
  return <ButtonWrapper {...props}>{label}</ButtonWrapper>;
};

export default Button;

Button.defaultProps = {
  label: "button",
  id: "button-id",
  type: "button",
};
