import React, { useState } from "react";

const Search = (props) => {
  const [location, setLocation] = useState({ searchterm: "" });

  const handleText = (e) => {
    const txtInput = { ...location, [e.target.name]: e.target.value };
    setLocation(txtInput);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newloca = location.searchterm.toLowerCase().replaceAll(" ", "+");
    props.searchLocation(newloca);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="input"
          name="searchterm"
          onChange={handleText}
          value={location.searchterm}
          placeholder="Enter a city"
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Search;
