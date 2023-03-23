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

  // console.log(handleSubmit);
  console.log("location var:", location);

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
