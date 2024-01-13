import React, { useState } from "react";
import { Search } from "@material-ui/icons";
import "./Header.css";
import { IconButton } from "@material-ui/core";

function Header({ setSearch, setCategory }) {
  // ---------------------------------------------
  // States
  const [searchTerm, setSearchTerm] = useState("");
  // ---------------------------------------------

  // ---------------------------------------------
  //   Handle form submit event and pass the searchTerm To parent via setSearech()
  const handleSearchSubmit = (e) => {
    e.preventDefault();

    // if search Input is empty then set Search "india" (default)
    if (searchTerm === "") {
      setSearch("india");
    } else {
      setSearch(encodeURI(searchTerm));
    }
  };
  // ---------------------------------------------

  return (
    <div className="header">
      <form
        onSubmit={handleSearchSubmit}
        autoComplete="off"
        spellCheck="false"
        className="header__searchContainer"
      >
        {/* Branding */}
        <div className="header__logo" onClick={() => window.location.reload()}>
          
          <h2>PhotoShop</h2>
        </div>
        {/* Branding */}

        {/* SearchBar */}
        <div className="header__searchBar">
          <IconButton size="small" onClick={handleSearchSubmit}>
            <Search fontSize="large" className="header__searchIcon" />
          </IconButton>
          <input
            className="header__searchInput"
            type="text"
            name="searchInput"
            placeholder={`Search for images...`}
            spellCheck="false"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        {/* SearchBar */}

        <div className="header__categorySelect">
          <select
            name="category"
            onChange={(e) => {
              setCategory(e.target.value);
              handleSearchSubmit(e);
            }}
            defaultValue=""
          >
            <option value="">Category</option>
            <option value="backgrounds">Backgrounds</option>
            <option value="fashion">Fashion</option>
            <option value="nature">Nature</option>
            <option value="science">Science</option>
            <option value="education">Education</option>
            <option value="feelings">Feelings</option>
            <option value="health">Health</option>
            <option value="people">People</option>
            <option value="religion">Religion</option>
            <option value="places">Places</option>
            <option value="animals">Animals</option>
            <option value="industry">Industry</option>
            <option value="computer">Computer</option>
            <option value="food">Food</option>
            <option value="sports">Sports</option>
            <option value="transportation">Transportation</option>
            <option value="travel">Travel</option>
            <option value="buildings">Buildings</option>
            <option value="business">Business</option>
            <option value="music">Music</option>
            <option value="Anime">Anime</option>
          </select>
        </div>
      </form>
    </div>
  );
}

export default Header;
