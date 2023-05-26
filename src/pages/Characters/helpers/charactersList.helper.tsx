import * as moment from "moment";

import { CharacterTable } from "../services/characters.services";

export const formatCharactersListData = (list: any) => {
  const charactersList: CharacterTable[] = [];

  list.map((item: any) => {
    const character: CharacterTable = item;
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

  return charactersList;
};
