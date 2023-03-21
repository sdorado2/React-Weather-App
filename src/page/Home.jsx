import React, { useEffect, useState } from "react";
import Search from "../component/Search";
import axios from "axios";

const Home = () => {
  const [weather, setWeather] = useState([]);
  const api = "key";
  // const url = "#";

  const getWeather = async () => {
    const response = await axios
      .get(`https://jsonplaceholder.typicode.com/todos/`)
      .then((res) => res.data);
    console.log("Return response:", response);
    setWeather(response);
  };

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <div>
      Weather Search
      <Search searchLocation={getWeather} />
    </div>
  );
};

export default Home;
