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

  const onKey = (e) => {
    if (e.key === "Enter") {
      clickHandler(keyword);
      setKeyword("");
    }
  };

  return (
    <Stack>
      <MDInput
        type="text"
        value={keyword}
        onChange={changeHandler}
        onKeyPress={onKey}
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
