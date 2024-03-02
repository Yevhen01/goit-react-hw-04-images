import React, { useState } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  SearchBar,
  SerchForm,
  Input,
  SearchBtn,
  SerchFormBtnLabel,
} from "./SerchBar.styled";

const SearchBarComponent = (props) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (evt) => {
    setSearchQuery(evt.currentTarget.value.toLowerCase());
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (searchQuery.trim() === "") {
      toast.error("Please enter something");
      return;
    }
    props.onSubmit(searchQuery);
    setSearchQuery("");
  };

  return (
    <SearchBar>
      <SerchForm onSubmit={handleSubmit}>
        <Input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search for images and photos"
          name="serchQuery"
          value={searchQuery}
          onChange={handleChange}
        />
        <SearchBtn type="submit">
          <SerchFormBtnLabel>Search</SerchFormBtnLabel>
        </SearchBtn>
      </SerchForm>
    </SearchBar>
  );
};

export default SearchBarComponent;

SearchBar.propTypes = {
  onSubmit: PropTypes.func,
};
