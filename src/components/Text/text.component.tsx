import { TextWrapper } from "./text.style";

interface TextProps {
  text: string | number;
  variant?: string;
  _direction?: string;
}

const SwitchText = ({ text, variant }: TextProps) => {
  switch (variant) {
    case "h1":
      return <h1>{text}</h1>;
    case "h2":
      return <h2>{text}</h2>;
    case "h3":
      return <h3>{text}</h3>;
    default:
      return <p>{text}</p>;
  }
};

const Text = ({ _direction, ...props }: TextProps) => {
  return <TextWrapper {...{ _direction }}>{SwitchText(props)}</TextWrapper>;
};

export default Text;
