import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useContext } from "react";
import { CustomContext } from "../../../config/context/Context";

function valuetext(value) {
  return `${value}°C`;
}

export default function RangeSlider() {
  
  const { products } = useContext(CustomContext);
  
  const objectWithHighestPrice = products.length ? products.reduce((maxPriceObj, currentObj) => {
    return currentObj.price > maxPriceObj.price ? currentObj : maxPriceObj;
  }) : {price: 10000};
  
  const [value, setValue] = React.useState([120, objectWithHighestPrice.price]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ maxWidth: 232 }}>
      <Slider
        max={objectWithHighestPrice && +objectWithHighestPrice.price}
        getAriaLabel={() => "Temperature range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
    </Box>
  );
}
