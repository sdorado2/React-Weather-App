import React, { useEffect, useState } from "react";
import Search from "../component/Search";
import axios from "axios";

const Home = () => {
  const [weather, setWeather] = useState([]);
  const api_key = process.env.REACT_APP_API_KEY;
  // const url = "#";

  const getWeather = async (searchTerm) => {
    const response = await axios
      .get(
        `http://api.openweathermap.org/data/2.5/forecast?q=${searchTerm},us&appid=${api_key}`
      )
      .then((res) => res.data);
    console.log("Return response:", response);
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
