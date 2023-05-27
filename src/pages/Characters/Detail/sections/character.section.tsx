import { theme } from "../../../../styles/theme";
import Button from "../../../../components/Button/button.component";
import {
  Div,
  StyledDivProps,
} from "../../../../components/Layout/layout.style";
import Section from "../../../../components/Section/section.component";
import Text from "../../../../components/Text/text.component";
import Image from "../../../../components/Image/image.component";
import useNavigationHook from "../../../../hooks/useNavigation.hook";
import useCharacterData from "../hooks/useCharacterData.hook";

const CharacterSection = () => {
  const { character } = useCharacterData();
  const { handleNavigateTo } = useNavigationHook();

  const divStyle: StyledDivProps = {
    _display: "flex",
    _flexDirection: "column",
    _alignItems: "center",
  };

  return (
    <Section _px={theme.margin.X4}>
      <Div {...divStyle} _padding={`${theme.margin.X6} 0px`}>
        {character && (
          <Div
            {...{
              _borderRadius: "100%",
              _overflow: "hidden",
              _maxWidth: "250px",
              _minHeight: "auto",
              _background: "#fff",
            }}
          >
            <Image
              src={`${character?.thumbnail?.path}.${character?.thumbnail?.extension}`}
              title={character?.name}
              alt={character?.name}
              _height="250px"
            />
          </Div>
        )}

        <Div {...divStyle}>
          <Text variant="h1" text={character?.name} _direction="center" />
          <Div
            {...divStyle}
            {...{
              _gap: theme.margin.X6,
              _padding: `0px ${theme.margin.X4}`,
            }}
          >
            <Div {...{ _maxWidth: "80%" }}>
              <Text text={character?.description} _direction="justify" />
            </Div>
            <Div>
              <Button
                label="Back"
                onClick={() => handleNavigateTo("/characters")}
              />
            </Div>
          </Div>
        </Div>
      </Div>
    </Section>
  );
};

export default CharacterSection;
