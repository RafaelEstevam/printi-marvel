import { useState } from "react";
import { theme } from "../../../styles/theme";
import Button from "../../Button/button.component";
import Input from "../../Input/input.component";
import { Div } from "../../Layout/layout.style";
import Text from "../../Text/text.component";

interface searchPagePaginationProps {
  handleSearch: (page: number) => any;
  max: number;
}

const SearchPagePagination = ({
  handleSearch,
  max,
}: searchPagePaginationProps) => {
  const min = 1;

  const [formData, setFormData] = useState({
    searchNumber: 0,
  });

  return (
    <Div _display="flex" _gap={theme.margin.X2} _flexdirection="column">
      <Div _display="flex" _gap={theme.margin.X2}>
        <Input
          type="number"
          placeholder={"Search page"}
          name={"searchNumber"}
          id={"searchNumber"}
          set={setFormData}
          state={formData}
          value={formData.searchNumber}
          max={max}
        />
        <Button
          id={`button-id-search`}
          label={"Search"}
          disabled={
            formData.searchNumber > max + 1 || formData.searchNumber < min + 1
          }
          onClick={() => handleSearch((formData.searchNumber - 1) * 10)}
        />
      </Div>
      {formData.searchNumber > max + 1 && (
        <Text variant="small" text={`Max page ${max + 1}`} />
      )}

      {formData.searchNumber + 1 < min && (
        <Text variant="small" text={`Min page 1`} />
      )}
    </Div>
  );
};

export default SearchPagePagination;
