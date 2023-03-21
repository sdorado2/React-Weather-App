import React, { useState } from "react";

const Search = (props) => {
  const [location, setLocation] = useState({ searchterm: "" });

  const handleText = (e) => {
    setLocation({ ...location, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.searchLocation(location.searchterm);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="input"
          name="searchterm"
          onChange={handleText}
          value={location.searchterm}
        ></input>
        <input type="submit" value="submit"></input>
      </form>
    </div>
  );
};

export default Search;
