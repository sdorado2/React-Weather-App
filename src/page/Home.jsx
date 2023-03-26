import axios from "axios";
import React, { useEffect, useState } from "react";
import Search from "../component/Search";
import Loaded from "../component/Loaded";
import Loading from "../component/Loading";
import Getweather from "../component/Getweather";

const Home = () => {
  const [weather, setWeather] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const api_key = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    Getweather("New York");
    setTimeout(() => setLoading(false), 5000);
  }, []);

  const getWeather = async (searchTerm) => {
    const response = await axios
      .get(
        `http://api.openweathermap.org/data/2.5/forecast?q=${searchTerm},us&appid=${api_key}`
      )
      .then((res) => res.data);
    setWeather(response);
  };

  return (
    <div>
      <div>
        <Search searchLocation={getWeather} />
      </div>
      {isLoading ? <Loading /> : <Loaded weather={weather} />}
    </div>
  );
};

export default Home;
