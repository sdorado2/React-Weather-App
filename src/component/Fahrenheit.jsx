import React from "react";

const Fahrenheit = ({ temp }) => {
  const ABSOLUTEZERO = -273;
  const KELVIN = Math.floor(temp);
  const CONVERSIONRATE = 9 / 5;
  const CELSIUS = 32;
  let fahrenheit = 0;

  const convertToF = () => {
    fahrenheit = CELSIUS + (KELVIN + ABSOLUTEZERO) * CONVERSIONRATE;
    return Math.floor(fahrenheit);
  };

  return <div>{convertToF()} &deg;F </div>;
};

export default Fahrenheit;
