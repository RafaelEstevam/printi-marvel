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
import { removePaginationOnStorage } from "../../../../helpers/paginationPersist.helper";
import Loading from "../../../../components/Loading/loading.component";

const CharacterSection = () => {
  const { character, loading } = useCharacterData();
  const { handleNavigateTo } = useNavigationHook();

  const divStyle: StyledDivProps = {
    _display: "flex",
    _flexdirection: "column",
    _alignitems: "center",
  };

  return (
    <>
      <Loading loading={loading} />
      <Section _px={theme.margin.X4}>
        <Div {...divStyle} _padding={`${theme.margin.X6} 0px`}>
          {character && (
            <Div
              {...{
                _borderradius: "100%",
                _overflow: "hidden",
                _maxwidth: "250px",
                _minwidth: "250px",
                _minheight: "auto",
                _background: "#fff",
              }}
            >
              {character?.name && (
                <Image
                  src={`${character?.thumbnail?.path}.${character?.thumbnail?.extension}`}
                  title={character?.name}
                  alt={character?.name}
                  _height="250px"
                />
              )}
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
              <Div {...{ _maxwidth: "80%" }}>
                <Text
                  text={character?.description || " - "}
                  _direction="justify"
                />
              </Div>
              <Div>
                <Button
                  id={`page-back`}
                  label="Back"
                  onClick={() => {
                    handleNavigateTo("/characters");
                    removePaginationOnStorage("characterComicsListPageOffset");
                  }}
                />
              </Div>
            </Div>
          </Div>
        </Div>
      </Section>
    </>
  );
};

export default CharacterSection;
