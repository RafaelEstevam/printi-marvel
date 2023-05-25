import Section from "../../../../components/Section/section.component";
import useCharacterData from "../hooks/useCharacterData.hook";

const CharacterSection = () => {
  const { character } = useCharacterData();
  console.log(character);

  return (
    <Section>
      <h1>Dados do personagem</h1>
    </Section>
  );
};

export default CharacterSection;
