import Card from "../../../../components/Card/card.component";
import Text from "../../../../components/Text/text.component";
import { theme } from "../../../../styles/theme";

export interface ComicsProps {
  title: string;
  description: string;
  modified: string;
  id: number;
  img: string;
}

const ComicDetail = ({
  id,
  description,
  img,
  modified,
  title,
}: ComicsProps) => {
  return (
    <Card>
      <div style={{ display: "flex", width: "100%", gap: 16 }}>
        <div
          style={{ borderRadius: "16px", width: "100px", overflow: "hidden" }}
        >
          <img src={img} title={title} style={{ width: "100%" }} />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            gap: 16,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: theme.margin.X2,
              }}
            >
              <Text text="Título: " variant="p" />
              <Text text={title} variant="h3" />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: theme.margin.X2,
              }}
            >
              <Text text="Número da capa: " variant="p" />
              <Text text={id} variant="h3" />
            </div>
          </div>
          <div
            style={{
              padding: theme.margin.X4,
              alignItems: "center",
              background: theme.colors.light,
              borderRadius: theme.border.radiusX4,
            }}
          >
            <Text text={description} variant="p" />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ComicDetail;
