import Card from "../../../../components/Card/card.component";
import {
  Div,
  StyledDivProps,
} from "../../../../components/Layout/layout.style";
import Text from "../../../../components/Text/text.component";
import Image from "../../../../components/Image/image.component";
import { theme } from "../../../../styles/theme";
import { ComicsTitle, ComicsTitleWrapper } from "./comicsDetail.style";

export interface ComicsProps {
  title: string;
  description: string;
  modified: string;
  id: number;
  img: string;
  issueNumber: number;
}

const ComicDetail = ({
  id,
  description,
  img,
  title,
  issueNumber,
}: ComicsProps) => {
  const divStyle: StyledDivProps = {
    _display: "flex",
    _width: "100%",
    _gap: theme.margin.X4,
  };

  return (
    <Card>
      <Div {...divStyle}>
        <Div
          {...{
            _overflow: "hidden",
            _maxWidth: "100px",
            _minHeight: "auto",
            _background: "#fff",
          }}
        >
          <Image
            src={img}
            title={title}
            alt={title}
            _borderRadius={theme.margin.X4}
          />
        </Div>
        <Div {...divStyle} _flexDirection="column">
          <ComicsTitleWrapper>
            <ComicsTitle>
              <Text text="Title: " variant="p" />
              <Text text={title} variant="h3" />
            </ComicsTitle>
            <ComicsTitle>
              <Text text="Number: " variant="p" />
              <Text text={issueNumber} variant="h3" />
            </ComicsTitle>
          </ComicsTitleWrapper>
          {description && (
            <Div
              {...{
                _padding: theme.margin.X4,
                _alignItems: "center",
                _background: theme.colors.light,
                _borderRadius: theme.border.radiusX4,
              }}
            >
              <Text text={description} variant="p" />
            </Div>
          )}
        </Div>
      </Div>
    </Card>
  );
};

export default ComicDetail;
