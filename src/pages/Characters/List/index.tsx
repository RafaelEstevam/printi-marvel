import Card from "../../../components/Card/card.component";
import Datatable, {
  ColumnsProps,
} from "../../../components/Datatable/datatable.component";
import Grid from "../../../components/Grid/grid.component";
import GridItem from "../../../components/Grid/grid.item.component";
import Section from "../../../components/Section/section.component";
import Text from "../../../components/Text/text.component";
import { useAppDispatch } from "../../../hooks";
import { theme } from "../../../styles/theme";
import useCharactersList from "./hooks/useCharactersList.hook";

const columns: ColumnsProps[] = [
  { key: "id", label: "Id" },
  { key: "name", label: "Name" },
  { key: "description", label: "Description" },
  { key: "modified", label: "Last modification" },
];

const CharactersList = () => {
  const { characters, pagination, handleDispatch, handleLoading } =
    useCharactersList();

  return (
    <>
      <Section _px={theme.margin.X4}>
        <Grid>
          <GridItem _lg={12} _md={12} _sm={12} _xs={12}>
            <Text text="Characters" variant="h1" />
            <Card>
              <Datatable
                list={characters}
                {...pagination}
                {...{
                  columns,
                  link: "/characters/",
                  handleDispatch,
                  handleLoading,
                }}
              />
            </Card>
          </GridItem>
        </Grid>
      </Section>
    </>
  );
};

export default CharactersList;
