import { ButtonWrapper, ButtonWrapperProps } from "./button.style";

interface ButtonProps extends ButtonWrapperProps {
  label: string | number;
  id: string;
  type: "button" | "submit" | "reset";
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
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
