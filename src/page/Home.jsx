import React, { useEffect, useState } from "react";
import Search from "../component/Search";
import axios from "axios";

const Home = () => {
  const [weather, setWeather] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const api_key = process.env.REACT_APP_API_KEY;
  // const url = "#";

  useEffect(() => {
    getWeather("New York");
  }, []);

  const getWeather = async (searchTerm) => {
    setLoading(true);
    const response = await axios
      .get(
        `http://api.openweathermap.org/data/2.5/forecast?q=${searchTerm},us&appid=${api_key}`
      )
      .then((res) => res.data);

    console.log("Return response:", response);
    setWeather(response);
    setLoading(false);
  };

  const loading = () => {
    return (
      <div>
        <h1>Please Wait While The Page Loads</h1>
      </div>
    );
  };

  const loaded = () => {
    return (
      <div>
        Weather Search
        <div>
          <Search searchLocation={getWeather} />
        </div>
        <h1>
          {weather.city.name},{weather.city.country}
        </h1>
        <h2>Temp : {weather.list[0].main.temp}</h2>
      </div>
    );
  };

  return isLoading === true ? loading : loaded;
};

export default Home;
