/* eslint-disable import/no-unresolved */
import { useState } from "react";
import { Stack } from "@mui/system";
import MDButton from "components/MDButton";
import MDInput from "components/MDInput";

// eslint-disable-next-line react/prop-types
function SearchInput({ clickHandler }) {
  const [keyword, setKeyword] = useState("");
  const changeHandler = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <Stack>
      <MDInput
        type="text"
        value={keyword}
        onChange={changeHandler}
        label="Search Keyword"
        size="large"
      />
      <MDButton
        onClick={(e) => {
          clickHandler(keyword);
          setKeyword("");
        }}
        color="info"
      >
        Search
      </MDButton>
    </Stack>
  );
}

export default SearchInput;
