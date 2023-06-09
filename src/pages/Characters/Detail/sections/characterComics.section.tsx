import Loading from "../../../../components/Loading/loading.component";
import Pagination from "../../../../components/Pagination/pagination.component";
import Section from "../../../../components/Section/section.component";
import Text from "../../../../components/Text/text.component";
import { theme } from "../../../../styles/theme";
import ComicDetail, { ComicsProps } from "../components/comicsDetail.component";
import useCharacterComicsList from "../hooks/useCharacterComicsList.hook";

const CharacterComicsSection = () => {
  const { characterComics, pagination, handleLoading, loading } =
    useCharacterComicsList();

  return (
    <>
      <Loading loading={loading} />
      <Section _px={theme.margin.X4}>
        <Text variant="h2" text="Comics" />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: theme.margin.X4,
          }}
        >
          {characterComics === null && <Text text={"Loading..."} />}
          {characterComics?.length === 0 && <Text text={"Nothing to show."} />}
          {characterComics?.map((comics: ComicsProps) => (
            <ComicDetail
              key={comics.id}
              id={comics.id}
              issueNumber={comics.issueNumber}
              description={comics.description}
              img={comics.img}
              modified={comics.modified}
              title={comics.title}
            />
          ))}
          <Pagination {...pagination} {...{ handleLoading }} />
        </div>
      </Section>
    </>
  );
};

export default CharacterComicsSection;
