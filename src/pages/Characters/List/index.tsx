import Card from "../../../components/Card/card.component";
import Grid from "../../../components/Grid/grid.component";
import GridItem from "../../../components/Grid/grid.item.component";
import Header from "../../../components/Header/header.component";
import Section from "../../../components/Section/section.component";
import Table from "../../../components/Table/table.component";

interface Character {
  id: number;
  name: string;
  description: string;
  lastUpdate: string;
}

const characters: Character[] = [
  {
    id: 1,
    name: "Iron Man",
    description: "Genius, billionaire, playboy, philanthropist.",
    lastUpdate: "2023-05-23",
  },
  {
    id: 2,
    name: "Captain America",
    description: "Super soldier and leader of the Avengers.",
    lastUpdate: "2023-05-24",
  },
];

const CharactersList = () => {
  // const {characters} = useCharactersList();

  console.log("charachters list");

  return (
    <>
      <Header />
      <Section>
        <Grid>
          <GridItem _lg={12} _md={12} _sm={12} _xs={12}>
            <div>
              <h1>Personagens</h1>
            </div>
            <Card>
              <Table list={characters} />
            </Card>
          </GridItem>
        </Grid>
      </Section>
    </>
  );
};

export default CharactersList;
