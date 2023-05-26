import Card from "../../../components/Card/card.component";
import Datatable, {
  ColumnsProps,
} from "../../../components/Datatable/datatable.component";
import Grid from "../../../components/Grid/grid.component";
import GridItem from "../../../components/Grid/grid.item.component";
import Section from "../../../components/Section/section.component";
import Text from "../../../components/Text/text.component";
import useCharactersList from "./hooks/useCharactersList.hook";

const columns: ColumnsProps[] = [
  { key: "id", label: "" },
  { key: "name", label: "Nome" },
  { key: "description", label: "Descrição" },
  { key: "modified", label: "Última atualização" },
];

const CharactersList = () => {
  const { characters } = useCharactersList();

  return (
    <>
      <Section>
        <Grid>
          <GridItem _lg={12} _md={12} _sm={12} _xs={12}>
            <Text text="Personagens" variant="h1" />
            <Card>
              <Datatable
                list={characters}
                {...{ columns, link: "/characters/" }}
              />
            </Card>
          </GridItem>
        </Grid>
      </Section>
    </>
  );
};

export default CharactersList;
