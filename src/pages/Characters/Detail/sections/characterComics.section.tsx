import Section from "../../../../components/Section/section.component"
import useCharacterComicsList from "../hooks/useCharacterComicsList.hook";

const CharacterComicsSection = () => {

    const {characterComics} = useCharacterComicsList();
    console.log(characterComics);

    return (
        <Section>
            <h1>Facículos</h1>
        </Section>
    )
};

export default CharacterComicsSection;