import React from "react";

const Celsius = ({ temp }) => {
  const ABSOLUTEZERO = -273.15;
  const KELVIN = { temp };
  let celsius = 0;

  const conversionToC = () => {
    return (celsius = KELVIN + ABSOLUTEZERO);
  };

  return <div>{conversionToC}</div>;
};

export default Celsius;
