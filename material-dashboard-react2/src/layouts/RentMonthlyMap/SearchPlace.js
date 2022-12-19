import React, { useState } from "react";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import MDBox from "components/MDBox";

function SearchPlace() {
  const [inputText, setInputText] = useState("");
  const [place, setPlace] = useState("");

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlace(inputText);
    setInputText("");
  };

  return (
    <MDBox>
      <form className="inputForm" onSubmit={handleSubmit}>
        <MDInput
          variant="outlined"
          placeholder="Search Place"
          onChange={onChange}
          value={inputText}
        />
        <MDButton type="submit">검색</MDButton>
      </form>
    </MDBox>
  );
}

export default SearchPlace;
