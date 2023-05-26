import Card from "../../../../components/Card/card.component";
import Text from "../../../../components/Text/text.component";
import { theme } from "../../../../styles/theme";

const ComicDetail = () => {
  return (
    <Card>
      <div style={{ display: "flex", width: "100%", gap: 24 }}>
        <div
          style={{ borderRadius: "16px", width: "300px", background: "#ccc" }}
        >
          <img src="" />
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
              <Text text="Nome do quadrinho" variant="h3" />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: theme.margin.X2,
              }}
            >
              <Text text="Número da capa: " variant="p" />
              <Text text="1234" variant="h3" />
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
            <Text text="Rick Jones has been Hulk's best bud since day one, but now he's more than a friend...he's a teammate! Transformed by a Gamma energy explosion, A-Bomb's thick, armored skin is just as strong and powerful as it is blue. And when he curls into action, he uses it like a giant bowling ball of destruction!" />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ComicDetail;
