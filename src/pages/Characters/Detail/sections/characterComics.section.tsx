import Pagination from "../../../../components/Pagination/pagination.component";
import Section from "../../../../components/Section/section.component";
import { theme } from "../../../../styles/theme";
import ComicDetail from "../components/comicDetail.component";
import useCharacterComicsList from "../hooks/useCharacterComicsList.hook";

const CharacterComicsSection = () => {
  const { characterComics } = useCharacterComicsList();

  return (
    <Section>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: theme.margin.X4,
        }}
      >
        <ComicDetail />
        <ComicDetail />
        <ComicDetail />
        <Pagination />
      </div>
    </Section>
  );
};

export default CharacterComicsSection;
