import React from "react";
import { WrapperButton } from "../Button/style";
function FormSearch({ onSearchChange }) {
  const handleInputChange = (evt) => {
    const newValue = evt.target.value;
    onSearchChange(newValue);
    // setCurrentPage(1);
    console.log(newValue)
  };
  return (
    <WrapperButton>
      <input
        type="text"
        name="seach"
        placeholder="Pesquise aqui sua foto"
        style={{ borderRadius: "16px", paddingLeft: "4px" }}
        onChange={handleInputChange}
      />
      <button>Search</button>
    </WrapperButton>
  );
}

export default FormSearch;
