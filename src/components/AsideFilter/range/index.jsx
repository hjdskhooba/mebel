import * as React from "react";
import { useContext } from "react";
import debounce from "@material-ui/core/utils/debounce";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { CustomContext } from "../../../config/context/Context";

export default function RangeSlider() {
  const { slider, setSlider, maxValue } = useContext(CustomContext);
  
  const handleChange = (e, newValue) => {
    setSlider(newValue);
  };
  
  return (
    <Box sx={{ maxWidth: 232 }}>
      <Slider
        max={maxValue}
        getAriaLabel={() => "Temperature range"}
        defaultValue={slider}
        onChange={debounce(handleChange, 1252)}
        valueLabelDisplay="auto"
        step={100}
        min={0}
      />
    </Box>
  );
}
