import moment from "moment";
import { ComicsProps } from "../Detail/components/comicsDetail.component";

export const formatComicsListData = (list: any) => {
  const comicsList: ComicsProps[] = [];

  list.map((item: any) => {
    const comics: ComicsProps = item;

    comics.modified = comics.modified = moment(new Date(item.modified)).format(
      "DD/MM/YYYY HH:mm"
    );
    comics.img = `${item?.thumbnail.path}.${item?.thumbnail.extension}`;
    comicsList.push(comics);
  });

  return comicsList;
};
