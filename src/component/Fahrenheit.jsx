import React from "react";

export const Fahrenheit = ({ temp }) => {
  const ABSOLUTEZERO = -273;
  const KELVIN = Math.floor(temp);
  let celsius = 32;

  const convertToC = () => {
    return (celsius = KELVIN + ABSOLUTEZERO);
  };

  return <div>{convertToC()} &deg;C </div>;
};
fca;
