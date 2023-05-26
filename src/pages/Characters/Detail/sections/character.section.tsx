import Button from "../../../../components/Button/button.component";
import Section from "../../../../components/Section/section.component";
import Text from "../../../../components/Text/text.component";
import useCharacterData from "../hooks/useCharacterData.hook";
import logo from "../../../../assets/imgs/logo_1.png";

const CharacterSection = () => {
  const { character } = useCharacterData();

  return (
    <Section>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "24px 0px",
        }}
      >
        <div
          style={{
            borderRadius: "100%",
            overflow: "hidden",
            maxWidth: "300px",
            maxHeight: "300px",
          }}
        >
          <img
            src={`${character?.thumbnail.path}.${character?.thumbnail.extension}`}
            height="300px"
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Text variant="h1" text={character?.name} _direction="center" />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 24,
              padding: "0px 16px",
              alignItems: "center",
            }}
          >
            <div style={{ maxWidth: "80%" }}>
              <Text text={character?.description} _direction="justify" />
            </div>
            <div>
              <Button label="Voltar" />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default CharacterSection;
