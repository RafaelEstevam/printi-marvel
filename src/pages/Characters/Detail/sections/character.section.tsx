import Button from "../../../../components/Button/button.component";
import Section from "../../../../components/Section/section.component";
import Text from "../../../../components/Text/text.component";
import useNavigationHook from "../../../../hooks/useNavigation.hook";
import { theme } from "../../../../styles/theme";
import useCharacterData from "../hooks/useCharacterData.hook";

const CharacterSection = () => {
  const { character } = useCharacterData();
  const { handleNavigateTo } = useNavigationHook();

  return (
    <Section _px={theme.margin.X4}>
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
            minWidth: "300px",
            minHeight: "300px",
            background: "#fff",
          }}
        >
          <img
            src={`${character?.thumbnail?.path}.${character?.thumbnail?.extension}`}
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
              <Button
                label="Voltar"
                onClick={() => handleNavigateTo("/characters")}
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default CharacterSection;
