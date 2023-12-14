import React from "react";
import { Helmet } from "react-helmet-async";

import { Stack, Typography } from "@mui/material";
import Image from "../images/404 Error-cuate.svg";
function Page404() {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      sx={{ height: "calc(100vh )" }}
    >
      <Helmet title="404 Error" />
      <img src={Image} alt="404" style={{ maxWidth: 500 }} />
      <Typography
        component="div"
        variant="h5"
        align="center"
        color={"#fff"}
        gutterBottom
      >
        {"Саҳифа топилмади"}
      </Typography>
    </Stack>
  );
}

export default Page404;
