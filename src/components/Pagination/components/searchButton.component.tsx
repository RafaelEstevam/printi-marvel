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
  const min = 0;

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
          disabled={formData.searchNumber > max || formData.searchNumber < min}
          onClick={() => handleSearch(formData.searchNumber * 10)}
        />
      </Div>
      {formData.searchNumber > max && (
        <Text variant="small" text={`Max page ${max}`} />
      )}

      {formData.searchNumber < min && (
        <Text variant="small" text={`Min page ${min}`} />
      )}
    </Div>
  );
};

export default SearchPagePagination;
