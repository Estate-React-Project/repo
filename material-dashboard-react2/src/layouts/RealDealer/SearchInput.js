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
        label="찾으실 중개업소의 주소 또는 원하시는 키워드를 입력하세요 (서울시전역만 해당)"
        size="large"
      />
      <MDButton
        onClick={(e) => {
          clickHandler(keyword);
          setKeyword("");
        }}
        color="success"
      >
        이하 목록에 보여주기
      </MDButton>
      <br />
    </Stack>
  );
}

export default SearchInput;
