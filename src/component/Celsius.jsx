import React from "react";

const Celsius = ({ temp }) => {
  const ABSOLUTEZERO = -273.15;
  const KELVIN = temp;
  let celsius = 0;

  console.log(KELVIN);

  const convertToC = () => {
    celsius = KELVIN + ABSOLUTEZERO;
    return celsius;
  };

  console.log(
    "🚀 ~ file: Celsius.jsx:9 ~ conversionToC ~ conversionToC:",
    convertToC()
  );
  console.log("🚀 ~ file: Celsius.jsx:7 ~ Celsius ~ celsius:", celsius);

  return <div>{convertToC()}</div>;
};

export default Celsius;
