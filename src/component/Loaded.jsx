import React from "react";

const Loaded = ({ weather }) => {
  console.log("It is loaded");
  return (
    <div>
      <h1>
        {weather.city.name},{weather.city.country}
      </h1>
      <h2>Temp : {weather.list[0].main.temp}</h2>
    </div>
  );
};

export default Loaded;
