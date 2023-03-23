import React from "react";

const Celsius = ({ temp }) => {
  const ABSOLUTEZERO = -273;
  const KELVIN = Math.floor(temp);
  let celsius = 0;

  const convertToC = () => {
    return (celsius = KELVIN + ABSOLUTEZERO);
  };

  return <div>{convertToC()} &deg;C </div>;
};

export default Celsius;
