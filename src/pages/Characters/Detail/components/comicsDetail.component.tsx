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
            _maxwidth: "100px",
            _minheight: "auto",
            _background: "#fff",
          }}
        >
          {title && (
            <Image
              src={img}
              title={title}
              alt={title}
              _borderradius={theme.margin.X4}
            />
          )}
        </Div>
        <Div {...divStyle} _flexdirection="column">
          <ComicsTitleWrapper>
            <ComicsTitle>
              <Text text="Title: " variant="p" />
              <Text text={title} variant="h3" className="textprimary" />
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
                _alignitems: "center",
                _background: theme.colors.lightGray,
                _borderradius: theme.border.radiusX4,
              }}
            >
              <div dangerouslySetInnerHTML={{ __html: description }} />
            </Div>
          )}
        </Div>
      </Div>
    </Card>
  );
};

export default ComicDetail;
