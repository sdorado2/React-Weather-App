import React from "react";

const Loaded = ({ weather }) => {
  console.log("It is loaded");
  return (
    <div>
      <h1>
        {weather.city.name},{weather.city.country}
      </h1>
      <h2>Temperature : {weather.list[0].main.temp}</h2>
      <h2>At : {weather.list[0].dt_txt}</h2>
      <span>
        {weather.list.map((elem) => (
          <h2>{elem.main.temp}</h2>
        ))}
      </span>
    </div>
  );
};

export default Loaded;
