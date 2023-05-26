import * as moment from "moment";

import { Character } from "../services/characters.services";

export const formatCharactersListData = (list: any) => {
  const charactersList: Character[] = [];

  list.map((item: any) => {
    const character: Character = item;
    character.modified = moment(new Date(item.modified)).format(
      "DD/MM/YYYY HH:mm"
    );
    character.slug = item.name
      .toLowerCase()
      .replace(" ", "-")
      .replace(/[`~!@#$%^&*()_|+\=?;:'",.<>\{\}\[\]\\\/]/gi, "")
      .replace(" ", "-");
    charactersList.push(character);
  });

  console.log(charactersList);

  return charactersList;
};
