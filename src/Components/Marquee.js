import { Typography } from "@mui/material";
import React from "react";
import Marquee from "react-fast-marquee";

export default function MarqueeComponent() {
  return (
    <Marquee autoFill>
      <Typography variant="h6" color={"#fff"}>
        Easy-to-use animation library for React apps {"\u2728"}
      </Typography>
    </Marquee>
  );
}
