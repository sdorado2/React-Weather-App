import React, { useState } from "react";

const Search = (props) => {
  const [location, setLocation] = useState({ searchterm: "" });

  const handleText = (e) => {
    const txtInput = {
      ...location,
      [e.target.name]: e.target.value.toLowerCase(),
    };
    setLocation(txtInput.searchterm.replaceAll(" ", "+"));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.searchLocation(location.searchterm);
  };

  // console.log(handleSubmit);
  console.log("location var:", location);
  // console.log(`I submitted ${handleSubmit}`);

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
