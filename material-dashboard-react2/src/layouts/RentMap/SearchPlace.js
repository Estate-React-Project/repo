import React, { useState } from "react";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import MDBox from "components/MDBox";
import MapContainer from "./MapContainer";

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
      <MDInput
        variant="outlined"
        placeholder="Search Place"
        onChange={onChange}
        value={inputText}
      />
      <MDButton onClick={handleSubmit}>검색</MDButton>
      <MapContainer searchPlace={place} />
    </MDBox>
  );
}

export default SearchPlace;
