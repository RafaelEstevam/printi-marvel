import Grid from "../../../components/Grid/grid.component";
import GridItem from "../../../components/Grid/grid.item.component";
import Section from "../../../components/Section/section.component";
import useCharactersList from "./hooks/useCharactersList.hook";

const CharactersList = () => {

    const {characters} = useCharactersList();

    console.log('charachters list');

    return (
        <Section>
            <Grid>
                <GridItem>
                    <h1>Personagens</h1>
                </GridItem>
            </Grid>
        </Section>
    )
};

export default CharactersList;