import { Box, Typography } from "@mui/material";
import React from "react";

export default function FooterComponent() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "60px",

        position: "absolute",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "#fff",
        bottom: 0,
        background: "rgba(0, 0, 0, 0.50)",
        backdropFilter: "blur(5px)",
      }}
    >
      <Typography
        sx={{ px: 2, fontFamily: "Vipnagorgialla", fontSize: "14px" }}
      >
        {" "}
        Boriga Baraka LLC
      </Typography>
      <Typography sx={{ px: 1, fontFamily: "Vipnagorgialla" }}>2023</Typography>
    </Box>
  );
}
