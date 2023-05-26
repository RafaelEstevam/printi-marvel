import Button from "../../../components/Button/button.component";
import Card from "../../../components/Card/card.component";
import Datatable, {
  ColumnsProps,
} from "../../../components/Datatable/datatable.component";
import Grid from "../../../components/Grid/grid.component";
import GridItem from "../../../components/Grid/grid.item.component";
import Header from "../../../components/Header/header.component";
import Pagination from "../../../components/Pagination/pagination.component";
import Section from "../../../components/Section/section.component";
import Table from "../../../components/Table/table.component";
import Text from "../../../components/Text/text.component";
import useCharactersList from "./hooks/useCharactersList.hook";

interface Character {
  id: number;
  name: string;
  description: string;
  modified: string;
}

const characters: Character[] = [
  {
    id: Math.random(),
    name: "Iron Man",
    description: "Genius, billionaire, playboy, philanthropist.",
    modified: "2023-05-23",
  },
  {
    id: Math.random(),
    name: "Captain America",
    description: "Super soldier and leader of the Avengers.",
    modified: "2023-05-24",
  },
  {
    id: Math.random(),
    name: "Captain America",
    description: "Super soldier and leader of the Avengers.",
    modified: "2023-05-24",
  },
  {
    id: Math.random(),
    name: "Captain America",
    description: "Super soldier and leader of the Avengers.",
    modified: "2023-05-24",
  },
  {
    id: Math.random(),
    name: "Captain America",
    description: "Super soldier and leader of the Avengers.",
    modified: "2023-05-24",
  },
  {
    id: Math.random(),
    name: "Captain America",
    description: "Super soldier and leader of the Avengers.",
    modified: "2023-05-24",
  },
  {
    id: Math.random(),
    name: "Captain America",
    description: "Super soldier and leader of the Avengers.",
    modified: "2023-05-24",
  },
  {
    id: Math.random(),
    name: "Captain America",
    description: "Super soldier and leader of the Avengers.",
    modified: "2023-05-24",
  },
  {
    id: Math.random(),
    name: "Captain America",
    description: "Super soldier and leader of the Avengers.",
    modified: "2023-05-24",
  },
  {
    id: Math.random(),
    name: "Captain America",
    description: "Super soldier and leader of the Avengers.",
    modified: "2023-05-24",
  },
];

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
              <Datatable list={characters} {...{ columns }} />
            </Card>
          </GridItem>
        </Grid>
      </Section>
    </>
  );
};

export default CharactersList;
