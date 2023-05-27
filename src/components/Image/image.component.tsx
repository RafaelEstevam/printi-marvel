import { ImageWrapper, ImageWrapperProps } from "./image.style";

interface ImageProps extends ImageWrapperProps {
  src: string;
  title: string;
  alt: string;
}

const Image = ({ src, title, alt, ...props }: ImageProps) => {
  return (
    <ImageWrapper {...props}>
      <img {...{ src, title, alt }} style={{ width: "100%" }} />
    </ImageWrapper>
  );
};

export default Image;
