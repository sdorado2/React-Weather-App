import axios from "axios";
import React, { useEffect, useState } from "react";
import Search from "../component/Search";
import Loaded from "../component/Loaded";
import Loading from "../component/Loading";

const Home = () => {
  const [weather, setWeather] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const api_key = process.env.REACT_APP_API_KEY;
  // const url = "#";

  useEffect(() => {
    getWeather("New York");
    setTimeout(() => setLoading(false), 5000);
  }, []);

  const getWeather = async (searchTerm) => {
    const response = await axios
      .get(
        `http://api.openweathermap.org/data/2.5/forecast?q=${searchTerm},us&appid=${api_key}`
      )
      .then((res) => res.data);
    console.log("Return response:", response);
    setWeather(response);
    console.log("search term has : ", searchTerm);
  };

  return (
    <div>
      <h1>Weather Search</h1>
      <div>
        <Search searchLocation={getWeather} />
      </div>
      {isLoading ? <Loading /> : <Loaded weather={weather} />}
    </div>
  );
};

export default Home;
