import Card from "../../../../components/Card/card.component";
import Datatable, {
  ColumnsProps,
} from "../../../../components/Datatable/datatable.component";
import Section from "../../../../components/Section/section.component";
import useCharacterComicsList from "../hooks/useCharacterComicsList.hook";

const CharacterComicsSection = () => {
  const { characterComics } = useCharacterComicsList();

  return (
    <Section>
      <Card>teste</Card>
    </Section>
  );
};

export default CharacterComicsSection;
