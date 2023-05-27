import Button from "../../../../components/Button/button.component";
import {
  Div,
  StyledDivProps,
} from "../../../../components/Layout/layout.style";
import Section from "../../../../components/Section/section.component";
import Text from "../../../../components/Text/text.component";
import useNavigationHook from "../../../../hooks/useNavigation.hook";
import { theme } from "../../../../styles/theme";
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
        <Div
          {...{
            _borderRadius: "100%",
            _overflow: "hidden",
            _maxWidth: "300px",
            _maxHeight: "300px",
            _minWidth: "300px",
            _minHeight: "300px",
            _background: "#fff",
          }}
        >
          <img
            src={`${character?.thumbnail?.path}.${character?.thumbnail?.extension}`}
            title={character?.name}
            alt={character?.name}
            height="300px"
          />
        </Div>
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
            <div>
              <Button
                label="Back"
                onClick={() => handleNavigateTo("/characters")}
              />
            </div>
          </Div>
        </Div>
      </Div>
    </Section>
  );
};

export default CharacterSection;
