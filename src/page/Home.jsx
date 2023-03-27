import axios from "axios";
import React, { useEffect, useState } from "react";
import Search from "../component/Search";
import Loaded from "../component/Loaded";
import Loading from "../component/Loading";
import NotFound from "./NotFound";
import { Link } from "react-router-dom";

const Home = () => {
  const [weather, setWeather] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const api_key = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    getWeather("New York");
    setTimeout(() => setLoading(false), 5000);
  }, []);

  const getWeather = async (searchTerm) => {
    const response = await axios
      .get(
        `http://api.openweathermap.org/data/2.5/forecast?q=${searchTerm},us&appid=${api_key}`
      )
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        console.log("🚀 ~ file: Home.jsx:26 ~ getWeather ~ error:", error);
        setLoading(true);
        return <NotFound />;
      });
    setWeather(response);
    console.log(
      "🚀 ~ file: Home.jsx:29 ~ getWeather ~ setWeather(response);:",
      setWeather(response)
    );
    console.log("🚀 ~ file: Home.jsx:27 ~ getWeather ~ response:", response);
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
