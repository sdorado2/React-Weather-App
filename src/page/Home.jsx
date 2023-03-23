import React, { useEffect, useState } from "react";
import Search from "../component/Search";
import axios from "axios";

const Home = () => {
  const [weather, setWeather] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const api_key = process.env.REACT_APP_API_KEY;
  // const url = "#";

  useEffect(() => {
    setLoading(true);
    getWeather("New York");
    setLoading(false);
  }, []);

  const getWeather = async (searchTerm) => {
    const response = await axios
      .get(
        `http://api.openweathermap.org/data/2.5/forecast?q=${searchTerm},us&appid=${api_key}`
      )
      .then((res) => res.data);

    console.log("Return response:", response);
    setWeather(response);
  };

  const loading = () => {
    console.log("Waiting!");
    return (
      <div>
        <h1>Please Wait While The Page Loads</h1>
      </div>
    );
  };

  const loaded = () => {
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

  return (
    <div>
      <h1>Weather Search</h1>
      <div>
        <Search searchLocation={getWeather} />
      </div>
      {isLoading ? loading : loaded}
    </div>
  );
};

export default Home;
