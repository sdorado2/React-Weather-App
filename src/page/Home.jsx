import React, { useEffect, useState } from "react";
import Search from "../component/Search";
import axios from "axios";

const Home = () => {
  const [weather, setWeather] = useState(null);
  const api = "key";
  // const url = "#";

  const getWeather = async (searchTerm) => {
    const response = await axios
      .get(
        `http://api.openweathermap.org/data/2.5/forecast?q=${searchTerm},us&appid=${api}`
      )
      .then((res) => res.data);
    setWeather(response);
  };

  useEffect(() => {
    getWeather("New York");
  }, []);

  return (
    <div>
      Weather Search
      <Search searchLocation={getWeather} />
    </div>
  );
};

export default Home;
